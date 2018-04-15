export * from './alert.service';
export * from './mx.service';
import { AlertServiceProvider } from './alert.service';
import { MXService } from './mx.service';

export const SERVICES_PROVIDERS = [
    MXService,
    AlertServiceProvider
]