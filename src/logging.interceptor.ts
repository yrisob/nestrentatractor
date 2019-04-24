import { ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    call$: Observable<any>,
  ): Observable<any> {
    // tslint:disable-next-line:no-console
    const request = context.switchToHttp().getRequest() as Request;
    console.log(`Call method ${request.method}(${request.url}) with params `);

    const now = Date.now();
    return call$.pipe(
      tap(() => {
        // tslint:disable-next-line:no-console
        console.log(`After ... ${Date.now() - now}ms`);
      }),
    );
  }
}
