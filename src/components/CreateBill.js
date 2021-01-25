import React from 'react'

const CreateBill = () => {
    return (
        <div className="form-container">
            <form>
                <div className="form-group">
                    <label>Enter Customer ID</label>
                    <input type="text" name="custId" className="form-control"  placeholder="Enter Customer ID"/>
                </div>
                <div className="form-group">
                    <label>Enter Units</label>
                    <input type="text" name="units" className="form-control"  placeholder="Enter Units"/>
                </div>
                <div className="form-group">
                    <label>Enter Amount</label>
                    <input type="text" name="amount" className="form-control"  placeholder="Enter Amount"/>
                </div>
                <div className="form-group">
                <button type="submit" className="btn btn-primary btn-lg">Large button</button>
                </div>
            </form>
        </div>
    )
}

export default CreateBill
