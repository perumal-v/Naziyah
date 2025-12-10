<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProjectResource;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProjectController extends Controller
{
    public function index()
    {
        return ProjectResource::collection(Project::all());
    }

    public function show($id)
    {
        $project = Project::findOrFail($id);
        return new ProjectResource($project);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'short_description' => 'required|string',
            'full_description' => 'required|string',
            'images' => 'nullable|array', // Accept array of images
            'images.*' => 'image|max:2048', // Validate each image
            'tags' => 'nullable|array',
        ]);

        if ($request->hasFile('images')) {
            $images = [];
            foreach ($request->file('images') as $file) {
                $images[] = $file->store('projects', 'public');
            }
            $validated['images'] = $images;
        }

        $project = Project::create($validated);
        return new ProjectResource($project);
    }

    public function update(Request $request, $id)
    {
        $project = Project::findOrFail($id);

        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'short_description' => 'sometimes|string',
            'full_description' => 'sometimes|string',
            'images' => 'nullable|array',
            'images.*' => 'image|max:2048',
            'tags' => 'nullable|array',
        ]);

        if ($request->hasFile('images')) {
            // Logic to replace or append? Typically replace in REST unless specified.
            if ($project->images) {
                foreach ($project->images as $img) {
                    Storage::disk('public')->delete($img);
                }
            }
            $images = [];
            foreach ($request->file('images') as $file) {
                $images[] = $file->store('projects', 'public');
            }
            $validated['images'] = $images;
        }

        $project->update($validated);
        return new ProjectResource($project);
    }

    public function destroy($id)
    {
        $project = Project::findOrFail($id);
        if ($project->images) {
             foreach ($project->images as $img) {
                Storage::disk('public')->delete($img);
            }
        }
        $project->delete();
        return response()->json(['message' => 'Project deleted successfully']);
    }
}
