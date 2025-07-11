<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Models\User;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\OrderAddress;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class OrderController extends Controller
{
    /**
     * Get list of orders for authenticated user
     */
    public function index(Request $request): JsonResponse
    {
        $orders = Order::where('user_id', $request->user()->id)
            ->with(['items', 'address'])
            ->orderBy('created_at', 'desc')
            ->paginate($request->get('per_page', 10));

        return response()->json([
            'success' => true,
            'data' => $orders->items(),
            'meta' => [
                'current_page' => $orders->currentPage(),
                'last_page' => $orders->lastPage(),
                'per_page' => $orders->perPage(),
                'total' => $orders->total(),
            ]
        ]);
    }

    /**
     * Get specific order details
     */
    public function show(Request $request, int $id): JsonResponse
    {
        $order = Order::where('id', $id)
            ->where('user_id', $request->user()->id)
            ->with(['items', 'address'])
            ->first();

        if (!$order) {
            return response()->json([
                'success' => false,
                'message' => 'Order not found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'order' => $order
        ]);
    }

    /**
     * Create a new order
     */
    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'address.name' => 'required|string|max:255',
            'address.phone' => 'required|string|max:20',
            'address.email' => 'required|email',
            'address.address' => 'required|string',
            'address.city' => 'required|string|max:100',
            'address.state' => 'required|string|max:100',
            'address.country' => 'required|string|max:100',
            'address.zip_code' => 'required|string|max:20',
            'shipping_method' => 'required|string',
            'payment_method' => 'required|string',
            'coupon_code' => 'nullable|string',
            'note' => 'nullable|string',
        ]);

        try {
            DB::beginTransaction();

            // Create order address
            $address = OrderAddress::create([
                'name' => $request->input('address.name'),
                'phone' => $request->input('address.phone'),
                'email' => $request->input('address.email'),
                'address' => $request->input('address.address'),
                'city' => $request->input('address.city'),
                'state' => $request->input('address.state'),
                'country' => $request->input('address.country'),
                'zip_code' => $request->input('address.zip_code'),
            ]);

            // Create order
            $order = Order::create([
                'user_id' => $request->user()->id,
                'address_id' => $address->id,
                'shipping_method' => $request->input('shipping_method'),
                'shipping_option' => $request->input('shipping_option'),
                'payment_method' => $request->input('payment_method'),
                'coupon_code' => $request->input('coupon_code'),
                'note' => $request->input('note'),
                'status' => 'pending',
                'payment_status' => 'pending',
                'shipping_status' => 'not_shipped',
                'token' => Str::random(32),
                'sub_total' => 0, // Will be calculated from cart
                'tax_amount' => 0,
                'shipping_amount' => 0,
                'discount_amount' => 0,
                'amount' => 0, // Will be calculated
            ]);

            // For now, we'll create a simple order with basic data
            // In a real implementation, you would get cart data and calculate totals
            $order->update([
                'sub_total' => 100.00, // Example amount
                'amount' => 100.00,
            ]);

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Order created successfully',
                'order' => $order->load(['address'])
            ], 201);

        } catch (\Exception $e) {
            DB::rollBack();
            
            return response()->json([
                'success' => false,
                'message' => 'Failed to create order: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Cancel an order
     */
    public function cancel(Request $request, int $id): JsonResponse
    {
        $request->validate([
            'cancellation_reason' => 'required|string',
            'cancellation_reason_description' => 'nullable|string',
        ]);

        $order = Order::where('id', $id)
            ->where('user_id', $request->user()->id)
            ->first();

        if (!$order) {
            return response()->json([
                'success' => false,
                'message' => 'Order not found'
            ], 404);
        }

        if (!in_array($order->status, ['pending', 'processing'])) {
            return response()->json([
                'success' => false,
                'message' => 'Order cannot be cancelled'
            ], 400);
        }

        $order->update([
            'status' => 'canceled',
            'cancellation_reason' => $request->input('cancellation_reason'),
            'cancellation_reason_description' => $request->input('cancellation_reason_description'),
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Order cancelled successfully'
        ]);
    }
} 