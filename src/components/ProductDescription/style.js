import styled from 'styled-components';

const ProductContainer = styled.div`
    display: flex;
    margin: 100px;
    gap: 2em;
    width: fit-content;

    .gallery {
        display: flex;
        flex-direction: column;
        gap: 1.5em;
        
        .gallery__img-wrapper {
            width: 80px;
            height: 80px;
            overflow: hidden;

            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
    }

    .img-wrapper {
        height: 511px;
        width: 610px;
        overflow: hidden;
        img {
            object-fit: contain;
            width: 100%;
            height: 100%;
        }
    }

    .description {
        margin-left: 3em;
        display: flex;
        flex-direction: column;
        gap: 1em;
        width: fit-content;
        font-family: 'Raleway', sans-serif;
        .title {
            font-size: 30px;
            display: flex;
            flex-direction: column;
            gap: .35em;

            .brand {
                font-weight: 600;
            }
        }

        .attributes {
            display: flex;
            flex-direction: column;
            gap: 1em;
        }
    }
    .price {
        display: grid;
        gap: .5em;
        align-items: center;
        .price-title {
            font-family: 'Roboto Condensed', sans-serif;
            font-weight: 800;
            text-transform: uppercase;
        }
        .price-value {
            font-size: 24px;
            font-weight: 800;
        }
    }

    button {
        color: #fff;
        background-color: #5ECE7B;
        border: 0;
        font-family: 'Raleway', sans-serif;
        font-weight: 600;
        height: 52px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        width: 290px;
    }
`

export default ProductContainer;