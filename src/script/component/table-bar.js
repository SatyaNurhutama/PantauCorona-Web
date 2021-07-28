class TableBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <div id="home2">
          <div class="isi">
            <div class="container atas">
              <h4>Data pesebaran kasus di Indonesia</h4>
              <div class="row">
                <div data-spy="scroll" class="scrollspy">
                  <table class="table table-bordered" >
                  <thead>
                  <tbody>
                    <tr>
                      <th class="atasbro">No.</th>
                      <th class="atasbro">Provinsi</th>
                      <th class="atasbro">Positif</th>
                      <th class="atasbro">Sembuh</th>
                      <th class="atasbro">Meninggal</th>
                        
                    </tr>
                    <tr>
                    <tbody>
													     
													<tr>
														<td>1.</td>
														<td>DKI Jakarta</td>
														<td>8503</td>
														<td>3517</td>
														<td>535</td>
													
													</tr>
													    
													<tr>
														<td>2.</td>
														<td>Jawa Timur</td>
														<td>6806</td>
														<td>1681</td>
														<td>530</td>
													
													</tr>
													    
													<tr>
														<td>3.</td>
														<td>Jawa Barat</td>
														<td>2506</td>
														<td>995</td>
														<td>161</td>
													
													</tr>
													    
													<tr>
														<td>4.</td>
														<td>Sulawesi Selatan</td>
														<td>2383</td>
														<td>757</td>
														<td>98</td>
													
													</tr>
													    
													<tr>
														<td>5.</td>
														<td>Jawa Tengah</td>
														<td>1813</td>
														<td>626</td>
														<td>103</td>
													
													</tr>
													    
													<tr>
														<td>6.</td>
														<td>Kalimantan Selatan</td>
														<td>1565</td>
														<td>128</td>
														<td>108</td>
													
													</tr>
													    
													<tr>
														<td>7.</td>
														<td>Sumatera Selatan</td>
														<td>1229</td>
														<td>450</td>
														<td>46</td>
													
													</tr>
													    
													<tr>
														<td>7.</td>
														<td>Papua</td>
														<td>1137</td>
														<td>78</td>
														<td>7</td>
													
													</tr>
													    
													<tr>
														<td>8.</td>
														<td>Banten</td>
														<td>1096</td>
														<td>401</td>
														<td>73</td>
													
													</tr>
													    
													<tr>
														<td>9.</td>
														<td>Nusa Tenggara Barat</td>
														<td>857</td>
														<td>404</td>
														<td>28</td>
													
													</tr>
													    
													<tr>
														<td>10.</td>
														<td>Sumatera Barat</td>
														<td>659</td>
														<td>389</td>
														<td>29</td>
													
													</tr>
													    
													<tr>
														<td>11.</td>
														<td>Bali</td>
														<td>640</td>
														<td>412</td>
														<td>5</td>
													
													</tr>
													    
													<tr>
														<td>12.</td>
														<td>Sumatera Utara</td>
														<td>635</td>
														<td>193</td>
														<td>53</td>
													
													</tr>
													    
													<tr>
														<td>13.</td>
														<td>Sulawesi Utara</td>
														<td>546</td>
														<td>80</td>
														<td>50</td>
													
													</tr>
													    
													<tr>
														<td>14.</td>
														<td>Kalimantan Tengah</td>
														<td>537</td>
														<td>213</td>
														<td>29</td>
													
													</tr>
													    
													<tr>
														<td>15.</td>
														<td>Kalimantan Timur</td>
														<td>362</td>
														<td>221</td>
														<td>3</td>
													
													</tr>
													    
													<tr>
														<td>16.</td>
														<td>Maluku</td>
														<td>328</td>
														<td>89</td>
														<td>8</td>
													
													</tr>
													    
													<tr>
														<td>17.</td>
														<td>Sulawesi Tenggara</td>
														<td>266</td>
														<td>174</td>
														<td>5</td>
													
													</tr>
													    
													<tr>
														<td>18.</td>
														<td>Daerah Istimewa Yogyakarta</td>
														<td>250</td>
														<td>194</td>
														<td>8</td>
													
													</tr>
													    
													<tr>
														<td>19.</td>
														<td>Kalimantan Barat</td>
														<td>245</td>
														<td>138</td>
														<td>4</td>
													
													</tr>
													    
													<tr>
														<td>20.</td>
														<td>Kepulauan Riau</td>
														<td>228</td>
														<td>123</td>
														<td>16</td>
													
													</tr>
													    
													<tr>
														<td>21.</td>
														<td>Maluku Utara</td>
														<td>227</td>
														<td>37</td>
														<td>19</td>
													
													</tr>
													    
													<tr>
														<td>22.</td>
														<td>Papua Barat</td>
														<td>191</td>
														<td>84</td>
														<td>2</td>
													
													</tr>
													    
													<tr>
														<td>23.</td>
														<td>Kalimantan Utara</td>
														<td>170</td>
														<td>133</td>
														<td>2</td>
													
													</tr>
													    
													<tr>
														<td>24.</td>
														<td>Sulawesi Tengah</td>
														<td>159</td>
														<td>94</td>
														<td>4</td>
													
													</tr>
													    
													<tr>
														<td>25.</td>
														<td>Lampung</td>
														<td>150</td>
														<td>108</td>
														<td>11</td>
													
													</tr>
													    
													<tr>
														<td>26.</td>
														<td>Gorontalo</td>
														<td>145</td>
														<td>69</td>
														<td>7</td>
													
													</tr>
													    
													<tr>
														<td>27.</td>
														<td>Kepulauan Bangka Belitung</td>
														<td>123</td>
														<td>42</td>
														<td>1</td>
													
													</tr>
													    
													<tr>
														<td>28.</td>
														<td>Riau</td>
														<td>120</td>
														<td>107</td>
														<td>6</td>
													
													</tr>
													    
													<tr>
														<td>29.</td>
														<td>Jambi</td>
														<td>105</td>
														<td>27</td>
														<td>0</td>
													
													</tr>
													    
													<tr>
														<td>30.</td>
														<td>Nusa Tenggara Timur</td>
														<td>105</td>
														<td>37</td>
														<td>1</td>
													
													</tr>
													    
													<tr>
														<td>31.</td>
														<td>Sulawesi Barat</td>
														<td>95</td>
														<td>63</td>
														<td>2</td>
													
													</tr>
													    
													<tr>
														<td>32.</td>
														<td>Bengkulu</td>
														<td>92</td>
														<td>47</td>
														<td>4</td>
													
													</tr>
													    
													<tr>
														<td>33.</td>
														<td>Aceh</td>
														<td>22</td>
														<td>18</td>
														<td>1</td>
													
													</tr>
                    </tbody>
                  </tbody>
                </table>
              </div>
            </div>
            <p>Update terakhir : 10 Juni 2020 20:43:24 WIB</p>
          </div>
        </div>
      </div>
        `;
    }
}

customElements.define("table-bar", TableBar);