import React from 'react';

const ScaleTable = () => {
    return (
      <div className='containerStyle fade-in'>
        <h2 className='headingStyle'>SCALES AND ARPEGGIOS</h2>
        <h3 className='subheadingStyle'>FINGERING CHART</h3>
        <p>Fingerings apply for both Major and all minor keys unless indicated by the following codes: (M) Major, (n.m.) natural minor, (h.m.) harmonic minor, (Ia.m.) melodic minor</p>
        <div className='d-flex flex-column flex-md-row' >
            <div className='inline-block  p-3'>
                <h3 >SCALES</h3>
                <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Scale</th>
                        <th>Left Hand</th>
                        <th>Right Hand</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>C, G, D, A, E</td>
                        <td>54321321</td>
                        <td>12312345</td>
                    </tr>
                    <tr>
                        <td>B</td>
                        <td>43214321</td>
                        <td>12312345</td>
                    </tr>
                    <tr>
                        <td>F#</td>
                        <td>43213212</td>
                        <td>23412312 (M)
                        <br></br>34123123 (n.m.)
                        <br></br>34123123 (h.m.)
                        <br></br>2312341<u>3</u>2132143 (m.m.)</td>
                    </tr>
                    <tr>
                        <td>C#</td>
                        <td>32143213</td>
                        <td>23123412 (M)
                        <br></br>34123123 (n.m.)
                        <br></br>34123123 (h.m.)
                        <br></br>2312341<u>3</u>2132143 (m.m.)</td>
                    </tr>
                    <tr>
                        <td>A-flat</td>
                        <td>32143213 (M)
                        <br></br>32132143 (n.m.)
                        <br></br>32143213 (h.m.)
                        <br></br>3214321<u>2</u>3123123 (m.m.)</td>
                        <td>34123123</td>
                    </tr>
                    <tr>
                        <td>E-flat</td>
                        <td>32143213 (M)
                        <br></br>21432132 (m)</td>
                        <td>31234123</td>
                    </tr>
                    <tr>
                        <td>B-flat</td>
                        <td>32143213 (M)
                        <br></br>21321432 (m)</td>
                        <td>41231234</td>
                    </tr>
                    <tr>
                        <td>F</td>
                        <td>54321321</td>
                        <td>12341234</td>
                    </tr>
                </tbody>
                </table>
            </div>
            <div className='inline-block  p-3'>
                <h3>ARPEGGIOS</h3>
                <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Arpeggio</th>
                        <th>Left Hand</th>
                        <th>Right Hand</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>C, G, D, A, E, B, F</td>
                        <td>5321 or 5421</td>
                        <td>1235</td>
                    </tr>
                    {/* <tr>
                        <td>B</td>
                        <td>5321 or 5421</td>
                        <td>1235</td>
                    </tr> */}
                    <tr>
                        <td>F#</td>
                        <td>5321 or 5421 (M)
                        <br></br>2142 (m)</td>
                        <td>1235 (M)
                        <br></br>4124 (m)</td>
                    </tr>
                    <tr>
                        <td>C#, A-flat</td>
                        <td>2142</td>
                        <td>4124</td>
                    </tr>
                    {/* <tr>
                        <td>A-flat</td>
                        <td>2142</td>
                        <td>4124</td>
                    </tr> */}
                    <tr>
                        <td>E-flat</td>
                        <td>2142 (M)
                        <br></br>5321 or 5421 (m)</td>
                        <td>4124 (M)
                        <br></br>1235 (m)</td>
                    </tr>
                    <tr>
                        <td>B-flat</td>
                        <td>2142 (M)
                        <br></br>3213 (m)</td>
                        <td>4124 (M)
                        <br></br>2312 (m)</td>
                    </tr>
                    {/* <tr>
                        <td>F</td>
                        <td>5321 or 5421</td>
                        <td>1235</td>
                    </tr> */}
                </tbody>
                </table>
            </div>
        </div>
      </div>
    );
  
}

export default ScaleTable;
