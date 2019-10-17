import React from 'react'
import Pagination from "react-js-pagination";

export default props => 
    <div className="navigation-bar-bottom">
        <div className="total-posts">
            Exibindo {props.totalPosts} postagens
        </div>
        <Pagination 
            activePage={props.currentPage}
            totalItemsCount={props.totalItemsCount}
            pageRangeDisplayed={3}
            hideFirstLastPages
            onChange={props.changePage()}        
        />
    </div>