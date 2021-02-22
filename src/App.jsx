import { h } from 'preact'
import { useEffect } from 'preact/hooks'
import './App.css'
import Sidebar from './components/sidebar'
import Marquee from './components/marquee'

function App() {

  useEffect(() => {
    const MIN = 5
    setTimeout(function(){ location.reload(); }, MIN * 60 * 1000);
  }, [])

  return (
    <div className='grid-container'>
      <div className='inside'></div>
      <div className='item a1'>
        <div className='item-header'>nt-batman</div>
	  <iframe src="https://dashboard.newtelco.dev/d-solo/rWuiSZNGz/noc-dashboard-charts-office?panelId=12&orgId=1" width="90%" height="250" frameborder="0"></iframe>
      </div>
      <div className='item a2'>
        <div className='item-header'>Proxmox</div>
	  <iframe src="https://dashboard.newtelco.dev/d-solo/rWuiSZNGz/noc-dashboard-charts-office?panelId=11&orgId=1" width="90%" height="250" frameborder="0"></iframe>
      </div>
      <div className='item a3' style={{ flexDirection: 'row' }}>
        <div className='item-header'>DigitalOcean</div>
	  <iframe src="https://dashboard.newtelco.dev/d-solo/rWuiSZNGz/noc-dashboard-charts-office?panelId=10&orgId=1" width="90%" height="250" frameborder="0"></iframe>
      </div>
      <div className='item b1'>
        <div className='item-header'>NCEX</div>
	  <iframe src="https://dashboard.newtelco.dev/d-solo/rWuiSZNGz/noc-dashboard-charts-office?orgId=1&panelId=2" width="90%" height="250" frameborder="0"></iframe>
      </div>
      <div className='item b2'>
        <div className='item-header'>eShelter</div>
	  <iframe src="https://dashboard.newtelco.dev/d-solo/yZg6lRHGk/eshelter?orgId=1&var-Interface=ae0&panelId=3" width="90%" height="250" frameborder="0"></iframe>
      </div>
      <div className='item b3'>
        <div className='item-header'>Office</div>
	  <iframe src="https://dashboard.newtelco.dev/d-solo/rWuiSZNGz/noc-dashboard-charts-office?orgId=1&panelId=4" width="90%" height="250" frameborder="0"></iframe>
      </div>
      <div className='item c123'>
        <Marquee>
          <div class='ticker__item'>
            <img
              src='http://cam1.newtelco.local:8090/s1.mjpg'
              height='250'
              width='425'
              style='border:none;'
            ></img>
          </div>
          <div class='ticker__item'>
            <img
              src='http://cam1.newtelco.local:8090/s2.mjpg'
              height='250'
              width='425'
              style='border:none;'
            ></img>
          </div>
          <div class='ticker__item'>
            <img
              src='http://cam1.newtelco.local:8090/s3.mjpg'
              height='250'
              width='425'
              style='border:none;'
            ></img>
          </div>
          <div class='ticker__item'>
            <img
              src='http://cam2.newtelco.local:8090/s4.mjpg'
              height='250'
              width='425'
              style='border:none;'
            ></img>
          </div>
          <div class='ticker__item'>
            <img
              src='http://cam2.newtelco.local:8090/s5.mjpg'
              height='250'
              width='425'
              style='border:none;'
            ></img>
          </div>
	  {/* <div class='ticker__item'>
            <img
              src='http://cam2.newtelco.local:8090/s6.mjpg'
              height='250'
              width='425'
              style='border:none;'
            ></img>
          </div> */}
          <div class='ticker__item'>
            <img
              src='http://cam3.newtelco.local:8090/s7.mjpg'
              height='250'
              width='425'
              style='border:none;'
            ></img>
          </div>
          <div class='ticker__item'>
            <img
              src='http://cam3.newtelco.local:8090/s8.mjpg'
              height='250'
              width='425'
              style='border:none;'
            ></img>
          </div>
	  {/* <div class='ticker__item'>
            <img
              src='http://cam3.newtelco.local:8090/s10.mjpg'
              height='250'
              width='425'
              style='border:none;'
            ></img>
          </div> 
          <div class='ticker__item'>
            <img
              src='http://cam4.newtelco.local:8090/s11.mjpg'
              height='250'
              width='425'
              style='border:none;'
            ></img>
          </div> */}
          <div class='ticker__item'>
            <img
              src='http://cam4.newtelco.local:8090/s12.mjpg'
              height='250'
              width='425'
              style='border:none;'
            ></img>
          </div>
          <div class='ticker__item'>
            <img
              src='http://cam4.newtelco.local:8090/s13.mjpg'
              height='250'
              width='425'
              style='border:none;'
            ></img>
          </div>
          <div class='ticker__item'>
            <img
              src='http://cam4.newtelco.local:8090/s16.mjpg'
              height='250'
              width='425'
              style='border:none;'
            ></img>
          </div>
          <div class='ticker__item'>
            <img
              src='http://cam4.newtelco.local:8090/s17.mjpg'
              height='250'
              width='425'
              style='border:none;'
            ></img>
          </div>
          <div class='ticker__item'>
            <img
              src='http://cam4.newtelco.local:8090/s18.mjpg'
              height='250'
              width='425'
              style='border:none;'
            ></img>
          </div>
        </Marquee>
      </div>
      <div className='sidebar'>
        <Sidebar />
      </div>
    </div>
  )
}

export default App
