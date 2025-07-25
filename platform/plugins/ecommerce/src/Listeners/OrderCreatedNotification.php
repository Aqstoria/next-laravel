<?php

namespace Botble\Ecommerce\Listeners;

use Botble\Base\Events\AdminNotificationEvent;
use Botble\Base\Supports\AdminNotificationItem;
use Botble\Ecommerce\Events\OrderCreated;
use Botble\Ecommerce\Events\OrderPlacedEvent;

class OrderCreatedNotification
{
    public function handle(OrderPlacedEvent|OrderCreated $event): void
    {
        event(new AdminNotificationEvent(
            AdminNotificationItem::make()
                ->title(trans('plugins/ecommerce::order.new_order_notifications.new_order_with_code', ['code' => $event->order->code]))
                ->description(trans('plugins/ecommerce::order.new_order_notifications.description', [
                    'customer' => $event->order->shippingAddress->name,
                    'quantity' => $quantity = $event->order->products->count(),
                    'product' => $quantity > 1 ? trans('plugins/ecommerce::order.new_order_notifications.products') : trans('plugins/ecommerce::order.new_order_notifications.product'),
                ]))
                ->action(trans('plugins/ecommerce::order.new_order_notifications.view'), route('orders.edit', $event->order->getKey()))
        ));
    }
}
