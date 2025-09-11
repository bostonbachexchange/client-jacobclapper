import React from "react";
import styled from "styled-components";
import { Panel, H1, P } from "../lessons.styles"; // <= Case-sensitive

const TableWrap = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadow.sm};
`;

const T = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: clamp(13px, 3.2vw, 15px);
  background: ${({ theme }) => theme.colors.surface};

  th,
  td {
    padding: 12px 14px;
    vertical-align: top;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  thead th {
    background: ${({ theme }) => theme.colors.bg};
    text-align: left;
    font-weight: 600;
    position: sticky;
    top: 0;
  }

  tbody tr:hover {
    background: rgba(79, 70, 229, 0.06);
  }

  /* help long content wrap on narrow screens */
  td { word-break: break-word; }
`;

export default function ScaleTable() {
  return (
    <Panel>
      <H1>Scales & Arpeggios — Fingering Chart</H1>
      <P>
        <p>
          Fingerings apply for both Major and all minor keys unless indicated by
          the following codes: (M) Major, (n.m.) natural minor, (h.m.) harmonic
          minor, (m.m.) melodic minor
        </p>
      </P>
      <TableWrap>
        <T>
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
              <td>
                23412312 (M)
                <br />
                34123123 (n.m.)
                <br />
                34123123 (h.m.)
                <br />
                2312341<u>3</u>2132143 (m.m.)
              </td>
            </tr>
            <tr>
              <td>C#</td>
              <td>32143213</td>
              <td>
                23123412 (M)
                <br></br>34123123 (n.m.)
                <br></br>34123123 (h.m.)
                <br></br>2312341<u>3</u>2132143 (m.m.)
              </td>
            </tr>
            <tr>
              <td>A-flat</td>
              <td>
                32143213 (M)
                <br></br>32132143 (n.m.)
                <br></br>32143213 (h.m.)
                <br></br>3214321<u>2</u>3123123 (m.m.)
              </td>
              <td>34123123</td>
            </tr>
            <tr>
              <td>E-flat</td>
              <td>
                32143213 (M)
                <br></br>21432132 (m)
              </td>
              <td>31234123</td>
            </tr>
            <tr>
              <td>B-flat</td>
              <td>
                32143213 (M)
                <br></br>21321432 (m)
              </td>
              <td>41231234</td>
            </tr>
            <tr>
              <td>F</td>
              <td>54321321</td>
              <td>12341234</td>
            </tr>
          </tbody>
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
            <tr>
              <td>B</td>
              <td>5321 or 5421</td>
              <td>1235</td>
            </tr>
            <tr>
              <td>F#</td>
              <td>
                5321 or 5421 (M)
                <br></br>2142 (m)
              </td>
              <td>
                1235 (M)
                <br></br>4124 (m)
              </td>
            </tr>
            <tr>
              <td>C#, A-flat</td>
              <td>2142</td>
              <td>4124</td>
            </tr>
            <tr>
              <td>E-flat</td>
              <td>
                2142 (M)
                <br></br>5321 or 5421 (m)
              </td>
              <td>
                4124 (M)
                <br></br>1235 (m)
              </td>
            </tr>
            <tr>
              <td>B-flat</td>
              <td>
                2142 (M)
                <br></br>3213 (m)
              </td>
              <td>
                4124 (M)
                <br></br>2312 (m)
              </td>
            </tr>
            <tr>
              <td>F</td>
              <td>5321 or 5421</td>
              <td>1235</td>
            </tr>
          </tbody>
        </T>
      </TableWrap>
    </Panel>
  );
}
