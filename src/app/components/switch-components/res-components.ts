import { SampleComponent, SampleComponentInterpreterDirective } from 'modules/components';

export const ResComponents = [
    {
        ref: SampleComponentInterpreterDirective,
        selector: '[sample-component]',
        name: 'Sample Button',
        shape: 'window-max',
        description: 'Sample Button'
    },
    {
        ref: SampleComponentInterpreterDirective,
        selector: '[sample-component]',
        name: 'Sample Button',
        shape: 'view-columns',
        description: 'Sample Button'
    }
]