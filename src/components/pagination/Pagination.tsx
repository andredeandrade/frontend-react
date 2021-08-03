import React from 'react'
import './pagination.scss'

interface PaginationProps {
  pagination: IPagination
  onChangePage: (page:number) => void
}

export interface IPagination {
  limit: number
  page: number
  pages?: number
  total?: number
  totalCurrentPage?: number
}

const Pagination: React.FC<PaginationProps> = props => {
	return (
    <div className="pagination">
      <div className="results-content">
        Exibindo {props.pagination.totalCurrentPage} postagens
      </div>

      <div className="pages-content">
        <ul>
          <li
            className="navigation-arrow left"
            onClick={() => props.onChangePage(props.pagination.page - 1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="10.99" viewBox="0 0 7 10.99">
              <path d="M1848.993,729.5a.423.423,0,0,1-.128.307l-5.014,5.059a.421.421,0,0,1-.608,0l-1.121-1.132a.431.431,0,0,1,0-.613l3.588-3.62-3.588-3.62a.43.43,0,0,1,0-.613l1.121-1.132a.421.421,0,0,1,.608,0l5.014,5.059A.422.422,0,0,1,1848.993,729.5Z" transform="translate(-1841.993 -724.01)"/>
            </svg>
          </li>

          {
            props.pagination.page === props.pagination.pages && (
              <li 
                className="navigation-page"
                onClick={() => props.onChangePage(props.pagination.page - 2)}
              >
                {props.pagination.page - 2}
              </li>
            )
          }

          <li 
            className={props.pagination.page === 1 ? "navigation-page disabled" : "navigation-page"}
            onClick={() => props.onChangePage(props.pagination.page - 1)}
          >
            {props.pagination.page - 1}
          </li>

          <li className="navigation-page active">
            {props.pagination.page}
          </li>

          <li 
            className={props.pagination.page === props.pagination.pages ? "navigation-page disabled" : "navigation-page"}
            onClick={() => props.onChangePage(props.pagination.page + 1)}
          >
            {props.pagination.page + 1}
          </li>

          {
            props.pagination.page === 1 && (
              <li 
                className="navigation-page"
                onClick={() => props.onChangePage(props.pagination.page + 2)}
              >
                {props.pagination.page + 2}
              </li>
            )
          }

          <li 
            className="navigation-arrow right"
            onClick={() => props.onChangePage(props.pagination.page + 1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="10.99" viewBox="0 0 7 10.99">
              <path d="M1848.993,729.5a.423.423,0,0,1-.128.307l-5.014,5.059a.421.421,0,0,1-.608,0l-1.121-1.132a.431.431,0,0,1,0-.613l3.588-3.62-3.588-3.62a.43.43,0,0,1,0-.613l1.121-1.132a.421.421,0,0,1,.608,0l5.014,5.059A.422.422,0,0,1,1848.993,729.5Z" transform="translate(-1841.993 -724.01)"/>
            </svg>
          </li>
        </ul>
      </div>
    </div>
	)
}

export default Pagination