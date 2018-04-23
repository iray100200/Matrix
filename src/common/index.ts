import { MXWinComponentBox } from './win-component-box';
import { MXWinLayoutBox }from './win-layout-box';
import { MXWinLeftNavigator, MXWinLeftNavigatorDirective } from './win-left-navigator';
import { MXWinPrimarySide, MXWinSecondarySide, MXWinSplitPane } from './win-split-pane';
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
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
import { DocumentServiceProvider } from './win-services';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        ClarityModule,
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
        MXWinTemplateHostDirective
    ],
    entryComponents: [
        MXWinPalette
    ],
    providers: [
        DocumentServiceProvider
    ]
})
export class MXCommonModule {}