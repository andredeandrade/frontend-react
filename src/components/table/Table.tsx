import React from 'react'
import Pagination, { IPagination } from '../pagination/Pagination'
import Loader from '../loader/Loader'
import './table.scss'

interface TableProps {
  columns: string[]
  loading: boolean
  withPagination: boolean
  pagination: IPagination
  onChangePage: (page:number) => void
}

const Table: React.FC<TableProps> = props => {
	return (
    <div>
      {
        props.loading ? (
          <Loader />
        ) : (
          <div>
            <table className="table">
              <thead>
                <tr>
                  {props.columns.map((column, i) => (
                    <td key={i}>
                      {column}
                    </td>
                  ))}
                </tr>
              </thead>

              <tbody>
                {props.children}
              </tbody>
            </table>

            {props.withPagination && props.pagination 
              &&
              <Pagination 
                pagination={props.pagination}
                onChangePage={props.onChangePage}
              />}
          </div>
        )
      }
      
    </div>
	)
}

export default Table