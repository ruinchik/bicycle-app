import styled from 'styled-components';
import { type Product } from '../../../types';
import { useCartStore } from '../../../store/cartStore';

const Card = styled.article`
    display: grid;
    grid-template-rows: auto 1fr auto;
    gap: 10px;
    padding: 12px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 10px;
`;

const Img = styled.img`
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 8px;
`;

const Title = styled.h3`
    margin: 0;
    font-size: 16px;
`;

const Price = styled.div`
    font-weight: 700;
`;

type Props = { product: Product };

export function ProductCard({ product }: Props) {
    const addItem = useCartStore((s) => s.addItem);
    return (
        <Card>
            <Img src={product.imageUrl} alt={product.title} />
            <div>
                <Title>{product.title}</Title>
                <div style={{ color: 'var(--muted-text)', fontSize: 12 }}>{product.description}</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Price>{product.price.toLocaleString()} ₽</Price>
                <button onClick={() => addItem(product)}>В корзину</button>
            </div>
        </Card>
    );
}


