import { useGetOrdersQuery } from '@/store/services/orderApi';

const OrderPage = () => {
  const ordersQuery = useGetOrdersQuery();

  if (ordersQuery.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {ordersQuery.data?.map((order) => {
        return (
          <div key={order.id}>
            <div>{order.id}</div>
            <div>
              {order.products.map((product) => {
                return <div key={product.mealId}>{product.notes.join(', ')}</div>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderPage;
