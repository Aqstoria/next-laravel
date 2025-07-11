<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\OrderController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Authentication routes
Route::post('/auth/login', [AuthController::class, 'login']);
Route::post('/auth/register', [AuthController::class, 'register']);
Route::post('/auth/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
Route::get('/auth/user', [AuthController::class, 'user'])->middleware('auth:sanctum');
Route::post('/auth/profile', [AuthController::class, 'updateProfile'])->middleware('auth:sanctum');

// Custom API routes for Botble CMS integration
Route::group(['prefix' => 'api/v1'], function () {
    // Health check
    Route::get('/health', function () {
        return response()->json([
            'status' => 'ok',
            'message' => 'API is running',
            'timestamp' => now(),
            'version' => '1.0.0'
        ]);
    });

    // Simple test route
    Route::get('/test', function () {
        return response()->json([
            'success' => true,
            'message' => 'Backend is working!',
            'data' => [
                'php_version' => PHP_VERSION,
                'laravel_version' => app()->version(),
                'timestamp' => now()
            ]
        ]);
    });

    // E-commerce API routes
    Route::group(['prefix' => 'ecommerce'], function () {
        // Products
        Route::get('/products', function (Request $request) {
            try {
                $query = \Botble\Ecommerce\Models\Product::with(['categories', 'brand', 'variations'])
                    ->where('is_variation', 0)
                    ->where('status', 'published');

                // Apply filters
                if ($request->search) {
                    $query->where('name', 'like', '%' . $request->search . '%');
                }
                if ($request->category) {
                    $query->whereHas('categories', function ($q) use ($request) {
                        $q->where('slug', $request->category);
                    });
                }
                if ($request->brand) {
                    $query->whereHas('brand', function ($q) use ($request) {
                        $q->where('slug', $request->brand);
                    });
                }

                // Apply sorting
                switch ($request->sort) {
                    case 'price_asc':
                        $query->orderBy('price', 'asc');
                        break;
                    case 'price_desc':
                        $query->orderBy('price', 'desc');
                        break;
                    case 'name_asc':
                        $query->orderBy('name', 'asc');
                        break;
                    case 'name_desc':
                        $query->orderBy('name', 'desc');
                        break;
                    default:
                        $query->orderBy('created_at', 'desc');
                }

                $products = $query->paginate($request->get('per_page', 12));

                return response()->json([
                    'success' => true,
                    'data' => $products->items(),
                    'meta' => [
                        'current_page' => $products->currentPage(),
                        'last_page' => $products->lastPage(),
                        'per_page' => $products->perPage(),
                        'total' => $products->total(),
                    ]
                ]);
            } catch (\Exception $e) {
                return response()->json([
                    'success' => false,
                    'message' => 'Failed to fetch products: ' . $e->getMessage()
                ], 500);
            }
        });

        // Single product
        Route::get('/products/{slug}', function ($slug) {
            try {
                $product = \Botble\Ecommerce\Models\Product::with(['categories', 'brand', 'variations', 'reviews'])
                    ->where('slug', $slug)
                    ->where('is_variation', 0)
                    ->where('status', 'published')
                    ->first();

                if (!$product) {
                    return response()->json([
                        'success' => false,
                        'message' => 'Product not found'
                    ], 404);
                }

                return response()->json([
                    'success' => true,
                    'data' => $product
                ]);
            } catch (\Exception $e) {
                return response()->json([
                    'success' => false,
                    'message' => 'Failed to fetch product: ' . $e->getMessage()
                ], 500);
            }
        });

        // Categories
        Route::get('/categories', function () {
            try {
                $categories = \Botble\Ecommerce\Models\ProductCategory::with(['parent'])
                    ->where('status', 'published')
                    ->get();

                return response()->json([
                    'success' => true,
                    'data' => $categories
                ]);
            } catch (\Exception $e) {
                return response()->json([
                    'success' => false,
                    'message' => 'Failed to fetch categories: ' . $e->getMessage()
                ], 500);
            }
        });

        // Product Categories (alias for categories)
        Route::get('/product-categories', function () {
            try {
                $categories = \Botble\Ecommerce\Models\ProductCategory::with(['parent'])
                    ->where('status', 'published')
                    ->get();

                return response()->json([
                    'data' => $categories,
                    'error' => false,
                    'message' => null
                ]);
            } catch (\Exception $e) {
                return response()->json([
                    'data' => [],
                    'error' => true,
                    'message' => 'Failed to fetch categories: ' . $e->getMessage()
                ], 500);
            }
        });

        // Brands
        Route::get('/brands', function () {
            try {
                $brands = \Botble\Ecommerce\Models\Brand::where('status', 'published')->get();

                return response()->json([
                    'success' => true,
                    'data' => $brands
                ]);
            } catch (\Exception $e) {
                return response()->json([
                    'success' => false,
                    'message' => 'Failed to fetch brands: ' . $e->getMessage()
                ], 500);
            }
        });

        // Cart endpoints
        Route::post('/cart', function (Request $request) {
            try {
                $request->validate([
                    'product_id' => 'required|exists:ec_products,id',
                    'qty' => 'required|integer|min:1'
                ]);

                // Add to cart logic here
                return response()->json([
                    'success' => true,
                    'message' => 'Product added to cart'
                ]);
            } catch (\Exception $e) {
                return response()->json([
                    'success' => false,
                    'message' => 'Failed to add to cart: ' . $e->getMessage()
                ], 500);
            }
        });

        Route::get('/cart/{cartId}', function ($cartId) {
            try {
                // Get cart logic here
                return response()->json([
                    'success' => true,
                    'data' => []
                ]);
            } catch (\Exception $e) {
                return response()->json([
                    'success' => false,
                    'message' => 'Failed to get cart: ' . $e->getMessage()
                ], 500);
            }
        });

        // Orders
        Route::get('/orders', function (Request $request) {
            try {
                $query = \Botble\Ecommerce\Models\Order::with(['address', 'products', 'payment']);

                // Apply filters
                if ($request->status) {
                    $query->where('status', $request->status);
                }
                if ($request->shipping_status) {
                    $query->whereHas('shipment', function ($q) use ($request) {
                        $q->where('status', $request->shipping_status);
                    });
                }
                if ($request->payment_status) {
                    $query->whereHas('payment', function ($q) use ($request) {
                        $q->where('status', $request->payment_status);
                    });
                }

                $orders = $query->orderBy('created_at', 'desc')
                    ->paginate($request->get('per_page', 15));

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
            } catch (\Exception $e) {
                return response()->json([
                    'success' => false,
                    'message' => 'Failed to fetch orders: ' . $e->getMessage()
                ], 500);
            }
        });

        Route::get('/orders/{id}', function ($id) {
            try {
                $order = \Botble\Ecommerce\Models\Order::with(['address', 'products', 'payment', 'shipment'])
                    ->find($id);

                if (!$order) {
                    return response()->json([
                        'success' => false,
                        'message' => 'Order not found'
                    ], 404);
                }

                return response()->json([
                    'success' => true,
                    'data' => $order
                ]);
            } catch (\Exception $e) {
                return response()->json([
                    'success' => false,
                    'message' => 'Failed to fetch order: ' . $e->getMessage()
                ], 500);
            }
        });

        Route::post('/orders/{id}/cancel', function ($id, Request $request) {
            try {
                $order = \Botble\Ecommerce\Models\Order::find($id);
                
                if (!$order) {
                    return response()->json([
                        'success' => false,
                        'message' => 'Order not found'
                    ], 404);
                }

                $order->update(['status' => 'canceled']);

                return response()->json([
                    'success' => true,
                    'message' => 'Order canceled successfully'
                ]);
            } catch (\Exception $e) {
                return response()->json([
                    'success' => false,
                    'message' => 'Failed to cancel order: ' . $e->getMessage()
                ], 500);
            }
        });

        // Reviews
        Route::get('/products/{productId}/reviews', function ($productId) {
            try {
                $reviews = \Botble\Ecommerce\Models\Review::with(['user'])
                    ->where('product_id', $productId)
                    ->where('status', 'published')
                    ->orderBy('created_at', 'desc')
                    ->get();

                return response()->json([
                    'success' => true,
                    'data' => $reviews
                ]);
            } catch (\Exception $e) {
                return response()->json([
                    'success' => false,
                    'message' => 'Failed to fetch reviews: ' . $e->getMessage()
                ], 500);
            }
        });

        Route::post('/reviews', function (Request $request) {
            try {
                $request->validate([
                    'product_id' => 'required|exists:ec_products,id',
                    'rating' => 'required|integer|min:1|max:5',
                    'comment' => 'required|string|min:10|max:1000',
                ]);

                $review = \Botble\Ecommerce\Models\Review::create([
                    'product_id' => $request->product_id,
                    'user_id' => auth()->id(),
                    'rating' => $request->rating,
                    'comment' => $request->comment,
                    'status' => 'published',
                ]);

                return response()->json([
                    'success' => true,
                    'message' => 'Review submitted successfully',
                    'data' => $review
                ]);
            } catch (\Exception $e) {
                return response()->json([
                    'success' => false,
                    'message' => 'Failed to submit review: ' . $e->getMessage()
                ], 500);
            }
        })->middleware('auth:sanctum');
    });

    // Order creation endpoint
    Route::post('/orders', function (Request $request) {
        try {
            // Validate the request
            $request->validate([
                'customer_id' => 'required|exists:ec_customers,id',
                'products' => 'required|array',
                'products.*.id' => 'required|exists:ec_products,id',
                'products.*.quantity' => 'required|integer|min:1',
                'customer_address.name' => 'required|string',
                'customer_address.phone' => 'required|string',
                'customer_address.email' => 'required|email',
                'customer_address.address' => 'required|string',
                'customer_address.city' => 'required|string',
                'customer_address.country' => 'required|string',
                'customer_address.state' => 'required|string',
                'customer_address.zip_code' => 'required|string',
                'payment_method' => 'required|string',
                'payment_status' => 'required|string',
            ]);

            // Create the order using Botble's admin order creation
            $response = app(\Botble\Ecommerce\Http\Controllers\OrderController::class)
                ->store($request, app(\Botble\Ecommerce\Services\CreatePaymentForOrderService::class));

            if ($response->getData()->error) {
                return response()->json([
                    'success' => false,
                    'message' => $response->getData()->message,
                    'data' => $response->getData()
                ], 400);
            }

            return response()->json([
                'success' => true,
                'message' => 'Order created successfully',
                'data' => $response->getData()->data
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to create order: ' . $e->getMessage()
            ], 500);
        }
    });

    // Get orders endpoint
    Route::get('/orders', function (Request $request) {
        try {
            $orders = \Botble\Ecommerce\Models\Order::with(['address', 'products'])
                ->when($request->customer_id, function ($query, $customerId) {
                    return $query->where('user_id', $customerId);
                })
                ->orderBy('created_at', 'desc')
                ->paginate($request->get('per_page', 15));

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

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch orders: ' . $e->getMessage()
            ], 500);
        }
    });
}); 