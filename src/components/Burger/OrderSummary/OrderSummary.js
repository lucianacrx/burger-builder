import React from 'react';

import Auxiliar from '../../../hoc/Auxiliar/Auxiliar';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
                        .map(igKey => {
                            return <li key={igKey}>
                                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                                   </li> 
                        });
    
    return (
        <Auxiliar>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Auxiliar>
    );
};

export default orderSummary;