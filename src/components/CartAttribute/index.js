import { Component } from "react";

import { AttributesContainer, ValueContainer } from "./style";

class Attribute extends Component {
    render() {
        const { itemId } = this.props.selectedAttributes?.find((attribute) => attribute.attributeId === this.props.attribute.id)

        const El = this.props.attribute.items.map(item =>
            <ValueContainer
                isOverlay={this.props.isOverlay} isSelected={itemId === item.id}
                // onClick={() => this.props.editProduct({
                //     productId: this.props.productId,
                //     attributeId: this.props.attribute.id,
                //     newItemId: item.id,
                //     selectedAttributes: this.props.selectedAttributes
                // })}
                key={item.id}
                className={`${this.props.attribute.type}`}
                type={this.props.attribute.type}
                value={item.value}>
                {this.props.attribute.type === 'text' ? item.value : ''}
            </ValueContainer>);

        return (
            <AttributesContainer isOverlay={this.props.isOverlay} type={this.props.attribute?.type}>
                <p className="attribute-title">{this.props.attribute.name}:</p>
                <div className="attribute-values">{El}</div>
            </AttributesContainer>
        )
    }
}


// export default connect(null, { editProduct })(Attribute);
export default Attribute;