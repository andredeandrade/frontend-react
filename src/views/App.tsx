import React, { useState, useEffect } from 'react'

import Card from '../components/card/Card'
import Header from '../components/header/Header'
import { IPost, list } from '../services/Post'
import Table from '../components/table/Table'
import { IPagination } from '../components/pagination/Pagination'

import './app.scss'

const App: React.FC = () => {
  const [tableData, setTableData] = useState<IPost[]>()
  const [tablePagination, setTablePagination] = useState<IPagination>({
    limit: 20,
    page: 1
  })
  const [loading, setLoading] = useState(false)

  const getTableData = () => {
    setLoading(true)

    list(tablePagination.page)
      .then(res => {
        setTableData(res.data.data)
        setTablePagination({...res.data.meta.pagination, totalCurrentPage: res.data.data.length})
      })
      .catch(err => {
        console.log(err)
        setTableData([])
        setLoading(false)
      }).finally(() => setLoading(false))
  }

  const changePage = (page:number) => {
    if (tablePagination.pages && (page > tablePagination.pages || page < 1)) {
      return false
    }
    setTablePagination({...tablePagination, page})
  }

  useEffect(() => {
    getTableData()
  }, [tablePagination.page])


	return (
		<div className="app">
			<Header />
			
			<Card title="Últimas postagens">
        <Table 
          columns={['Titulo', 'Conteúdo']} 
          loading={loading}
          withPagination={true}
          pagination={tablePagination}
          onChangePage={changePage}
        >
          {tableData && tableData.length ? (
            tableData.map(item => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>Sem registros</td>
            </tr>
          )
          }
        </Table>
			</Card>
		</div>
	)
}

export default App
