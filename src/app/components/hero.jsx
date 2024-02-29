import React from 'react'

function hero() {
  return (
    //     <div className="hero min-h-screen bg-base-200">
    //   <div className="hero-content text-center">
    //     <div className="max-w-md">
    //       <h1 className="text-5xl font-bold">Hello there</h1>
    //       <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    //       <button className="btn btn-primary">Get Started</button>
    //     </div>
    //   </div>
    // </div>

    <div className='wrapper  bg-base-200'>


      <div className='flex justify-center items-center gap-5 pt-10 rounded text-white'>
        Article Topic Search: <input type="text" />
        <select className='w-60 rounded text-white' name="" id="">
          <option value="0">All</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2022">2021</option>
          <option value="2022">2020</option>
          <option value="2022">2019</option>
          <option value="2022">2018</option>
          <option value="2022">2017</option>
          <option value="2022">2016</option>
          <option value="2022">2015</option>
          <option value="2022">2014</option>
          <option value="2022">2013</option>
          <option value="2022">2012</option>
          <option value="2022">2011</option>
          <option value="2022">2010</option>
          <option value="2022">2009</option>
          <option value="2022">2008</option>
          <option value="2022">2007</option>
          <option value="2022">2006</option>
          <option value="2022">2005</option>
          <option value="2022">2004</option>
        </select>
        <button className='rounded bg-[#505050] w-[100px] h-[30px] '>Search</button>
      </div>

      <form className='flex justify-center items-center pt-10 gap-5 text-white' action="">Author Search: <input type="text" />
        <button className='rounded bg-[#505050] w-[100px] h-[30px]'>Search</button>
      </form>

      <span className='flex justify-center items-center pt-10 pb-10 text-white'>A total of 4 articles were found.</span>

      <hr />

      <div className='hero-middle-area flex justify-center items-center'>{/*starting div of table*/}
      <div className='w-[700px] m-10'>
        {/* table */}
        <div className="overflow-x-auto border rounded-lg">
          <table className="table">
            {/* head */}
            <thead className='bg-[#fce30b] text-black'>
              <tr>
                {/* <th></th> */}
                <th>Subject</th>
                <th>Writer</th>
                <th>History</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className=''>
                {/* <th>1</th> */}
                <td className='border'>
                  <a href="">Tax on securities income in 2023</a>
                </td>
                <td className='border'>M. Fatih Köprü</td>
                <td className='border'>	20.2.2024</td>
              </tr>
              {/* row 2 */}
              <tr>
                {/* <th>2</th> */}
                <td className='border'>
                  <a href="">Tax refund distortion in the 2024 Budget</a>
                </td>
                <td className='border'>Abdulkadir Kahraman</td>
                <td className='border'>06.2.2024</td>
              </tr>
              {/* row 3 */}
              <tr>
                {/* <th>3</th> */}
                <td className='border'>
                  <a href="">New tax regulations applicable to corporations</a>
                </td>
                <td className='border'>M. Fatih Köprü</td>
                <td className='border'>24.1.2024</td>
              </tr>
              {/* row 4 */}
              <tr>
                {/* <th>4</th> */}
                <td className='border'>
                  <a href="">Tax photo in the 2024 Budget law</a>
                </td>
                <td className='border'>Abdulkadir Kahraman</td>
                <td className='border'>10.1.2024</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>

      </div>   {/* end of table div  */}

    </div> 
  )
}

export default hero