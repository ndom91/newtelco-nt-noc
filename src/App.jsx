import { h } from 'preact'
import './App.css'
import Panel from './components/panel'
import Sidebar from './components/sidebar'
import Marquee from './components/marquee'

function App() {
  return (
    <div className='grid-container'>
      <div className='inside'></div>
      <div className='item a1'>
        <div className='item-header'>nt-batman</div>
        <div className='data-row'>
          <div
            data-netdata='system.cpu'
            data-dimensions='user'
            data-chart-library='gauge'
            data-width='150px'
            data-after='-60'
            data-points='60'
            data-colors='#67b246'
            data-title='CPU'
            data-units=''
          ></div>
          <div
            data-netdata='mem.available'
            data-dimensions='avail'
            data-chart-library='gauge'
            data-width='150px'
            data-after='-60'
            data-points='60'
            data-colors='#67b246 #009C7F #007DA4'
            data-title='RAM'
          ></div>
        </div>
        <div
          data-netdata='system.net'
          data-title='Requests Traffic'
          data-chart-library='dygraph'
          data-colors='#67b246 #b246aa'
          data-width='350px'
          data-height='100px'
          data-after='-300'
          data-points='300'
          data-title=''
          data-colors='#67b246'
          data-units=''
          data-legend='no'
          data-dygraph-drawaxis='false'
        ></div>
      </div>
      <div className='item a2'>
        <div className='item-header'>Proxmox</div>
        <div className='pve-item'>
          <span className='pve-logo-wrapper'>
            <img
              src='/img/pve_white.webp'
              className='pve-logo'
              alt='Proxmox Logo'
            />
            <span className='pve-logo-label'>1</span>
          </span>
          <div
            data-host='http://192.168.11.205:19999/'
            data-netdata='system.cpu'
            data-chart-library='dygraph'
            data-dygraph-theme='sparkline'
            data-legend='no'
            data-width='75%'
            data-colors='#00bb62 #67B246 #00bdfb #004e70'
            data-height='20'
            data-after='-300'
            // data-show-value-of-user-at="pve1_cpu"
            data-dt-element-name='pve1_cpu'
          ></div>
          <span className='cpu-label' id='pve1_cpu'></span>
        </div>
        <div className='pve-item'>
          <span className='pve-logo-wrapper'>
            <img
              src='/img/pve_white.webp'
              className='pve-logo'
              alt='Proxmox Logo'
            />
            <span className='pve-logo-label'>2</span>
          </span>
          <div
            data-host='http://192.168.11.203:19999/'
            data-netdata='system.cpu'
            data-chart-library='dygraph'
            data-dygraph-theme='sparkline'
            data-legend='no'
            data-width='75%'
            data-colors='#00bb62 #67B246 #00bdfb #004e70'
            data-height='20'
            data-after='-300'
            // data-show-value-of-user-at="pve2_cpu"
            data-dt-element-name='pve2_cpu'
          ></div>
          <span className='cpu-label' id='pve2_cpu'></span>
        </div>
        <div className='pve-item'>
          <span className='pve-logo-wrapper'>
            <img
              src='/img/pve_white.webp'
              className='pve-logo'
              alt='Proxmox Logo'
            />
            <span className='pve-logo-label'>5</span>
          </span>
          <div
            data-host='http://192.168.11.171:19999/'
            data-netdata='system.cpu'
            data-chart-library='dygraph'
            data-dygraph-theme='sparkline'
            data-legend='no'
            data-width='75%'
            data-colors='#00bb62 #67B246 #00bdfb #004e70'
            data-height='20'
            data-after='-300'
            // data-show-value-of-user-at="pve5_cpu"
            data-dt-element-name='pve5_cpu'
          ></div>
          <span className='cpu-label' id='pve5_cpu'></span>
        </div>
        <div className='pve-item'>
          <span className='pve-logo-wrapper'>
            <img
              src='/img/pve_white.webp'
              className='pve-logo'
              alt='Proxmox Logo'
            />
            <span className='pve-logo-label'>6</span>
          </span>
          <div
            data-host='http://192.168.11.201:19999/'
            data-netdata='system.cpu'
            data-chart-library='dygraph'
            data-dygraph-theme='sparkline'
            data-legend='no'
            data-width='75%'
            data-colors='#00bb62 #67B246 #00bdfb #004e70'
            data-height='20'
            data-after='-300'
            // data-show-value-of-user-at="pve6_cpu"
            data-dt-element-name='pve6_cpu'
          ></div>
          <span className='cpu-label' id='pve6_cpu'></span>
        </div>
      </div>
      <div className='item a3' style={{ flexDirection: 'row' }}>
        <div className='item-header'>DigitalOcean</div>
        <div className='do-item'>
          <div
            data-netdata='system.cpu'
            data-host='https://stats.gitlab.newtelco.dev/'
            data-chart-library='dygraph'
            data-colors='#67b246 #003400 #006999 #f6edd9'
            data-width='120px'
            data-height='220px'
            data-after='-60'
            data-points='60'
            data-title=''
            data-colors='#67b246'
            data-units=''
            data-legend='no'
            data-dygraph-drawaxis='false'
          ></div>
          <span>nt-gitlab</span>
        </div>
        <div className='do-item'>
          <div
            data-netdata='system.cpu'
            data-host='https://stats.crm.newtelco.dev/'
            data-chart-library='dygraph'
            data-colors='#67b246 #003400 #006999 #f6edd9'
            data-width='120px'
            data-height='220px'
            data-after='-60'
            data-points='60'
            data-title=''
            data-colors='#67b246'
            data-units=''
            data-legend='no'
            data-dygraph-drawaxis='false'
          ></div>
          <span>nt-crm</span>
        </div>
        <div className='do-item'>
          <div
            data-netdata='system.cpu'
            data-host='https://stats.other.newtelco.dev/'
            data-colors='#67b246 #003400 #006999 #f6edd9'
            data-chart-library='dygraph'
            data-width='120px'
            data-height='220px'
            data-after='-60'
            data-points='60'
            data-title=''
            data-colors='#67b246'
            data-units=''
            data-legend='no'
            data-dygraph-drawaxis='false'
          ></div>
          <span>nt-other</span>
        </div>
      </div>
      <div className='item b1'>
        <div className='item-header'>NCEX</div>
        {/* re0-ncex-mx960-b.2.17 - 172.16.4.1 - Total Traffic */}
        <img
          clssName='nms-traffic'
          width='380'
          src='https://nms.newtelco.de/graph.php?type=device_bits&period=86400&device=84&to=1591193206&from=-86400&draw_all=yes&legend=no&class=image-refresh&height=200&width=380&format=svg'
        />
      </div>
      <div className='item b2'>
        {/* ncex - 172.16.4.130 - eshelter */}
        <div className='item-header'>eShelter</div>
        <img
          clssName='nms-traffic'
          width='380'
          src='https://nms.newtelco.de/graph.php?to=1591198980&device=5&type=device_bits&from=1591112580&legend=no&height=200&width=380&format=svg'
        />
      </div>
      <div className='item b3'>
        {/* mikrotik 192.168.11.3 - office */}
        <div className='item-header'>Office</div>
        <img
          clssName='nms-traffic'
          width='380'
          src='https://nms.newtelco.de/graph.php?to=1591198964&device=133&type=device_bits&from=1591112564&legend=no&height=200&width=380&format=svg'
          style={{ fill: '#fff' }}
        />
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
          <div class='ticker__item'>
            <img
              src='http://cam2.newtelco.local:8090/s6.mjpg'
              height='250'
              width='425'
              style='border:none;'
            ></img>
          </div>
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
          <div class='ticker__item'>
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
          </div>
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
        </Marquee>
      </div>
      {/* <div className="header">Newtelco NOC Dashboard</div> */}
      <div className='sidebar'>
        <Sidebar />
      </div>
    </div>
  )
}

export default App
