<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CertificateResource;
use App\Models\Certificate;
use Illuminate\Http\Request;

class CertificateController extends Controller
{
    public function index(Request $request)
    {
        $query = Certificate::query();

        if ($request->has('category')) {
            $query->where('category', $request->category);
        }

        return CertificateResource::collection($query->get());
    }

    public function show($id)
    {
        $certificate = Certificate::findOrFail($id);
        return new CertificateResource($certificate);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'description' => 'nullable|string',
            'date' => 'required|date',
            'image' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('certificates', 'public');
        }

        $certificate = Certificate::create($validated);
        return new CertificateResource($certificate);
    }

    public function update(Request $request, $id)
    {
        $certificate = Certificate::findOrFail($id);
        
        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'category' => 'sometimes|string|max:255',
            'date' => 'sometimes|date',
            'image' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('image')) {
            // Manage old image deletion if desired
            $validated['image'] = $request->file('image')->store('certificates', 'public');
        }

        $certificate->update($validated);
        return new CertificateResource($certificate);
    }

    public function destroy($id)
    {
        $certificate = Certificate::findOrFail($id);
        $certificate->delete(); // Soft delete if trait used, or hard delete
        return response()->json(['message' => 'Certificate deleted successfully']);
    }
}
