export class ApiResponse<T> {
  constructor({
    status = null,
    message = 'Success',
    data = null,
    errors = [],
  }) {
    this.status = status;
    this.message = message;
    this.data = data;
    this.errors = errors;
  }

  status: number;
  message?: string;
  data: T;
  errors? = [];
}

// export class ApiResponseList<T> {
//   constructor({
//     list = [],
//     message = 'Get list Data successfully',
//     page = null,
//     per_page = null,
//     total = null,
//     metadata:any
//   }) {
//     this.data = {list,this.metadata};
//     this.page = page;
//     this.message = message;
//     this.per_page = per_page;
//     this.total = total;
//   }

//   status: number
//   message: string;
//   metadata:{
//   page: number;
//   per_page: number;
//   total: number;
//   }
//   data:{list,metadata}
// }
export class ApiResponseList<T> {
  constructor({
      list = [],
      message = 'Get list Data successfully',
      page = null,
      per_page = null,
      total = null,
  }) {
      this.data = { list: list, metadata:{page,per_page,total} };
      this.message = message;
      
  }

  status: number;
  message: string;
  data: {
      list: T[];
      metadata:  {
            page: number;
            per_page: number;
            total: number;
        };
  };

}
