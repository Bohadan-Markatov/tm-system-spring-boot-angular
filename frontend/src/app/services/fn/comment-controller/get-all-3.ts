/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CommentResponseDto } from '../../models/comment-response-dto';

export interface GetAll3$Params {
  taskId: number;
}

export function getAll3(http: HttpClient, rootUrl: string, params: GetAll3$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CommentResponseDto>>> {
  const rb = new RequestBuilder(rootUrl, getAll3.PATH, 'get');
  if (params) {
    rb.path('taskId', params.taskId, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<CommentResponseDto>>;
    })
  );
}

getAll3.PATH = '/api/comments/task/{taskId}';
