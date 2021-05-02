import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ //Los componentes de este modulo
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ //Componentes que se quieren hacer visibles
        HeroeComponent,
        ListadoComponent 
    ],
    imports: [ //Modulos
        CommonModule 
    ]
})
export class HeroesModule {}