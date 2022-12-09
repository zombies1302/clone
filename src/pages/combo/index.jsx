import { useEffect, useState } from "react";
import { getCombo } from "../../app/services/user/combo.service";
import './combo.css';

export default function Combo() {
  const [combo, setCombo] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchCombo = async () => {
    setLoading(true);
    const res = await getCombo();
    console.log(res.data)
    if (res.status === 200) {
      setCombo(res.data);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchCombo();
  }, []);
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="shop-breadcrumb">
            <div className="breadcrumb-main">
              <h4 className="text-capitalize breadcrumb-title">Tất cả Combo</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    {loading ? (
      <div className="card-body">
        <div className="spin-container text-center">
          <div className="atbd-spin-dots spin-lg">
            <span className="spin-dot badge-dot dot-primary"></span>
            <span className="spin-dot badge-dot dot-primary"></span>
            <span className="spin-dot badge-dot dot-primary"></span>
            <span className="spin-dot badge-dot dot-primary"></span>
          </div>
        </div>
      </div>
    ) : (
      // layout ở đây
      <div className="container-fluid w-80 pt-3">
        <div className="row product-page-list justify-content-center">     
        {combo && 
            combo.map((item) => (
              <div className="combo">
                <img src={item?.Image} class="card-img-top" alt="" />
                  <div class="card-body">
                    <h5 class="card-title">{item?.Name}</h5>
                    <p class="card-text">{item?.Details}</p>
                    <button href="#" class="btn btn-primary">
                      Chi tiết
                    </button>
                  </div>
             
              </div>
              
            ))
          } 
              </div>
              {/* phan trang */}
              <div className="d-flex justify-content-end pt-30">
                <nav className="atbd-page ">
                  <ul className="atbd-pagination d-flex">
                    <li className="atbd-pagination__item">
                      <a
                        href="#"
                        className="atbd-pagination__link pagination-control"
                      >
                        <span className="la la-angle-left" />
                      </a>
                      <a href="#" className="atbd-pagination__link">
                        <span className="page-number">1</span>
                      </a>
                      <a href="#" className="atbd-pagination__link active">
                        <span className="page-number">2</span>
                      </a>
                      <a href="#" className="atbd-pagination__link">
                        <span className="page-number">3</span>
                      </a>
                      <a
                        href="#"
                        className="atbd-pagination__link pagination-control"
                      >
                        <span className="page-number">...</span>
                      </a>
                      <a href="#" className="atbd-pagination__link">
                        <span className="page-number">12</span>
                      </a>
                      <a
                        href="#"
                        className="atbd-pagination__link pagination-control"
                      >
                        <span className="la la-angle-right" />
                      </a>
                      <a href="#" className="atbd-pagination__option"></a>
                    </li>
                    <li className="atbd-pagination__item">
                      <div className="paging-option">
                        <select name="page-number" className="page-selection">
                          <option value={20}>20/page</option>
                          <option value={40}>40/page</option>
                          <option value={60}>60/page</option>
                        </select>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
    )}
    </>
  );
}
