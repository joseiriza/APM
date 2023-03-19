import { Component } from "@angular/core";
import { productsHardcoded } from "src/api/products/products-hardcoded";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})

export class ProductListComponent {
    pageTitle: string = 'Product list';
    products: any[] = productsHardcoded;
    imageWidth: number = 50;
    imageMargin: number = 2;
}