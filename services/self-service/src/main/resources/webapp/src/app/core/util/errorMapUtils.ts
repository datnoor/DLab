/***************************************************************************

Copyright (c) 2016, EPAM SYSTEMS INC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

****************************************************************************/

export class ErrorMapUtils {
  public static setErrorMessage(errorCode): string {
    if (errorCode) {
      const defaultStatus = 'Error status [' + errorCode.status + ']. ';

      return defaultStatus.concat(errorCode.statusText);
    }
  }

  public static handleError(error: any) {
    const isJson = function(str) {
      try {
        JSON.parse(str);
      } catch (e) {
        return false;
      }
      return true;
    };

    let errMsg: string;
    if (typeof error === 'object' && error._body && isJson(error._body)) {
      if (error.json().error_message)
        errMsg = error.json().error_message;
    } else if (isJson(error._body)) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error._body ? error._body : error.toString();
    }

    return errMsg;
  }
}
