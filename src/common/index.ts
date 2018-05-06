import { MXWinComponentBox } from './win-component-box';
import { MXWinLayoutBox }from './win-layout-box';
import { MXWinLeftNavigator, MXWinLeftNavigatorDirective } from './win-left-navigator';
import { MXWinPrimarySide, MXWinSecondarySide, MXWinSplitPane } from './win-split-pane';
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router } from '@angular/router';
import { ClarityModule, ClrIconModule } from '@clr/angular';
import { ScrollbarModule } from 'ngx-scrollbar';
import { MXWinScroller } from './win-scroller';
import { MXWinBaseLayout } from './win-base-layout';
import { MXWinPropertyPane } from './win-property-pane';
import { MXWinColorSelector } from './win-color-selector';
import { MXWinPalette } from './win-palette';
import { MXWinTemplateHostDirective } from './win-directives';
import { MXService } from '../services';
import { ColorSketchModule } from 'ngx-color/sketch';
import { ColorHueModule } from 'ngx-color/hue';
import { MXDocumentServiceProvider, MXComponentServiceProvider, MXRouterService } from './win-services';
import { MXWinNumberPicker, MXWinNumberPickerGroup } from './win-number-picker';
import '@clr/icons/shapes/all-shapes';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        ClarityModule,
        ClrIconModule,
        ScrollbarModule,
        ColorSketchModule,
        ColorHueModule
    ],
    declarations: [
        MXWinComponentBox,
        MXWinLayoutBox,
        MXWinLeftNavigator,
        MXWinLeftNavigatorDirective,
        MXWinPrimarySide,
        MXWinSecondarySide,
        MXWinSplitPane,
        MXWinScroller,
        MXWinBaseLayout,
        MXWinPropertyPane,
        MXWinColorSelector,
        MXWinPalette,
        MXWinNumberPicker,
        MXWinNumberPickerGroup,
        // directives
        MXWinTemplateHostDirective
    ],
    exports: [
        MXWinComponentBox,
        MXWinLayoutBox,
        MXWinLeftNavigator,
        MXWinLeftNavigatorDirective,
        MXWinPrimarySide,
        MXWinSecondarySide,
        MXWinSplitPane,
        MXWinSplitPane,
        MXWinScroller,
        MXWinBaseLayout,
        MXWinPropertyPane,
        MXWinPalette,
        MXWinNumberPicker,
        MXWinNumberPickerGroup,
        MXWinTemplateHostDirective
    ],
    entryComponents: [
        MXWinPalette,
        MXWinNumberPicker,
        MXWinNumberPickerGroup
    ],
    providers: [
        MXDocumentServiceProvider,
        MXComponentServiceProvider,
        MXRouterService
    ]
})
export class MXCommonModule {}