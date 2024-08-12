import { useState } from "react";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
const ListView = ({setDetailId}) => {
  const {flights}=  useSelector((store)=>store.flight);
  const [itemOffset,setItemOffset]=useState(0);
  //sayfa başında eleman sayısını bildirir.
  const itemsPerPage=10;
  //slice methodunda kullandığım son elemanın statei
  const endOffset=itemOffset+itemsPerPage;
  const currentItems=flights.slice(itemOffset,endOffset);
  // maksimum sayfa sayısı hesaplama
  const pageCount=Math.ceil(flights.length / itemsPerPage);
  const  handlePageClick=(event)=>{
   const newOffset=( event.selected*itemsPerPage)%flights.length;
   setItemOffset(newOffset);
  };
  return (
    <div className="p-4">
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th>İşlem</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((flight)=>(
<tr key={flight.id}>
<td>{flight.id}</td>
<td>{flight.code} </td>
<td>{flight.lat}</td>
<td>{flight.lng}</td>
<td><button onClick={()=>setDetailId(flight.id)}>Detay</button></td>
</tr>
           ))}
        </tbody>
      </table>
      <ReactPaginate className="pagination justify-content-center my-5"
      pageClassName="page-item"
      nextClassName="page-item"
      pageLinkClassName="page-link"
      nextLinkClassName="page-link"
      previousLinkClassName="page-link"
      breakClassName="page-link"
        breakLabel="..."
        nextLabel="İleri >"
        onPageChange={handlePageClick}
        previousClassName="page-item"

        activeClassName="active"
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< Geri"
        renderOnZeroPageCount={null}
      />
    </div>
  )
}

export default ListView;