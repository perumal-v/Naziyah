<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ContactMessage;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Log;

class ContactMessageController extends Controller
{
    public function store(Request $request)
    {
        Log::info('Contact message request received', $request->all());

        try {
            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|email|max:255',
                'message' => 'required|string',
                'attachment' => 'nullable|file|max:5120', // 5MB max
            ]);

            if ($request->hasFile('attachment')) {
                $validated['attachment'] = $request->file('attachment')->store('attachments', 'public');
            }

            ContactMessage::create($validated);
            
            Log::info('Contact message saved successfully');

            return response()->json(['message' => 'Message sent successfully'], 201);
        } catch (\Exception $e) {
            Log::error('Contact message failed: ' . $e->getMessage());
            return response()->json(['message' => 'Failed to save message', 'error' => $e->getMessage()], 500);
        }
    }
}
