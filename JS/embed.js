var portraitMedium = {
  PreviewBox: `border: 0.325vh solid #aebe89; height: 52.5vmin;
    aspect-ratio: 0.85;
    border-radius: calc(52.5vmin * 0.85 * 0.05);
    display: flex;
    flex-direction: column;
    overflow: hidden;`,

  PreviewImage: `
    width: 100%;
    aspect-ratio: 1.1;
    z-index: 0;
    background-size: cover;
    cursor: pointer;
  `,

  PreviewInfo: `
    position: relative;
    top: auto;
    bottom: 0;
    height: calc(52.5vmin - (52.5vmin * 0.85 / 1.1) + 9vmin);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 0.75vh;
    padding-bottom: 0.75vh;
    border-top: 0.325vh solid #dae3bb;
    box-sizing: border-box;
    z-index: 5;
  `,

  PreviewName: `
    font-size: 3vmin;
    font-family: Urbanist;
    color: #aebe89;
    font-weight: 500;
    line-height: 1.75;
    text-align: center;
    cursor: pointer;
  `,

  PreviewSub: `
    font-size: 2.5vmin;
    font-family: Urbanist;
    color: #2b2119;
    font-weight: 400;
    line-height: 1.75;
    text-align: center;
  `,

  PreviewAdd: `
    height: 5vmin;
    aspect-ratio: 6;
    background-color: #dae3bb;
    margin-bottom: 0.5vmin;
    margin-top: auto;
    border-radius: calc(5vmin * 6 * 0.05);
    font-size: 2.5vmin;
    font-family: Urbanist;
    color: white;
    font-weight: 600;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  `,
};

var portraitSmall = {
  PreviewBox: `
    border: 0.25vmin solid #aebe89;
    height: 26.25vmin;
    aspect-ratio: 0.85;
    border-radius: calc(26.25vmin * 0.85 * 0.05);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  `,

  PreviewImage: `
    width: 100%;
    aspect-ratio: 1.1;
    z-index: 0;
    background-size: cover;
    cursor: pointer;
  `,

  PreviewInfo: `
    position: relative;
    top: auto;
    bottom: 0;
    height: calc(26.26vmin - (26.25vmin * 0.85 / 1.1) + 4.5vmin);    ;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 0.35vh;
    padding-bottom: 0.35vh;
    border-top: 0.25vh solid #dae3bb;
    box-sizing: border-box;
    z-index: 5;
  `,

  PreviewName: `
    font-size: 1.8vmin;
    font-family: Urbanist;
    color: #aebe89;
    font-weight: 500;
    line-height: 1.75;
    text-align: center;
    cursor: pointer;
  `,

  PreviewSub: `
    font-size: 1.25vmin;
    font-family: Urbanist;
    color: #2b2119;
    font-weight: 400;
    line-height: 1.75;
    text-align: center;
  `,

  PreviewAdd: `
    height: 2.25vmin;
    aspect-ratio: 6;
    background-color: #dae3bb;
    margin-bottom: 0.35vmin;
    margin-top: auto;
    border-radius: calc(2.25vmin * 6 * 0.05);
    font-size: 1.125vmin;
    font-family: Urbanist;
    color: white;
    font-weight: 600;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-sizing: border-box;
  `,
};

var portraitLarge = {
  PreviewBox: `
    border: 0.45vh solid #aebe89;
    height: 65vmin;
    aspect-ratio: 0.85;
    border-radius: calc(65vmin * 0.85 * 0.05);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  `,

  PreviewImage: `
    width: 100%;
    aspect-ratio: 1.1;
    z-index: 0;
    background-size: cover;
    cursor: pointer;
  `,

  PreviewInfo: `
    position: relative;
    top: auto;
    bottom: 0;
    height: calc(65vmin - (65vmin * 0.85 / 1.1) + 12vmin);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1vh;
    padding-bottom: 1vh;
    border-top: 0.45vh solid #dae3bb;
    box-sizing: border-box;
    z-index: 5;
  `,

  PreviewName: `
    font-size: 4vmin;
    font-family: Urbanist;
    color: #aebe89;
    font-weight: 500;
    line-height: 1.75;
    text-align: center;
    cursor: pointer;
  `,

  PreviewSub: `
    font-size: 3vmin;
    font-family: Urbanist;
    color: #2b2119;
    font-weight: 400;
    line-height: 1.75;
    text-align: center;
  `,

  PreviewAdd: `
    height: 6vmin;
    aspect-ratio: 6;
    background-color: #dae3bb;
    margin-bottom: 1.5vmin;
    margin-top: auto;
    border-radius: calc(6.5vmin * 6 * 0.05);
    font-size: 3.25vmin;
    font-family: Urbanist;
    color: white;
    font-weight: 600;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-sizing: border-box;
  `,
};

var portraitXLarge = {
  PreviewBox: `
    border: 0.55vh solid #aebe89;
    height: 80vmin;
    aspect-ratio: 0.85;
    border-radius: calc(80vmin * 0.85 * 0.05);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  `,

  PreviewImage: `
    width: 100%;
    aspect-ratio: 1.1;
    z-index: 0;
    background-size: cover;
    cursor: pointer;
  `,

  PreviewInfo: `
    position: relative;
    top: auto;
    bottom: 0;
    height: calc(80vmin - (80vmin * 0.85 / 1.1) + 15vmin);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1vmin;
    padding-bottom: 1vmin;
    border-top: 0.55vh solid #dae3bb;
    box-sizing: border-box;
    z-index: 5;
  `,

  PreviewName: `
    font-size: 6vmin;
    font-family: Urbanist;
    color: #aebe89;
    font-weight: 500;
    line-height: 1.5;
    text-align: center;
    cursor: pointer;
  `,

  PreviewSub: `
    font-size: 5vmin;
    font-family: Urbanist;
    color: #2b2119;
    font-weight: 400;
    line-height: 1.75;
    text-align: center;
  `,

  PreviewAdd: `
    height: 7.25vmin;
    aspect-ratio: 6;
    background-color: #dae3bb;
    margin-bottom: 1.75vmin;
    margin-top: auto;
    border-radius: calc(7.25vmin * 6 * 0.05);
    font-size: 3.65vmin;
    font-family: Urbanist;
    color: white;
    font-weight: 600;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-sizing: border-box;
  `,
};

var landscapeSmall = {
  PreviewBox: `
    border: 0.325vh solid #aebe89;
    width: 52.5vmin;
    aspect-ratio: 1.75;
    border-radius: calc(52.5vmin / 1.75 * 0.05);
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
  `,

  PreviewImage: `
    height: 100%;
    aspect-ratio: calc(1 / 1.1);
    z-index: 0;
    background-size: cover;
    cursor: pointer;
  `,

  PreviewInfo: `
    position: relative;
    margin-left: auto;
    margin-right: 0;
    height: 100%;
    width: calc(52.5vmin - (52.5vmin / 1.75 / 1.1));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding-top: 0.75vh;
    padding-bottom: 0.75vh;
    border-left: 0.325vh solid #dae3bb;
    box-sizing: border-box;
    z-index: 5;
  `,

  PreviewName: `
    width: 90%;
    font-size: 3vmin;
    font-family: Urbanist;
    color: #aebe89;
    font-weight: 500;
    line-height: 1.75;
    text-align: center;
    cursor: pointer;
  `,

  PreviewSub: `
    width: 90%;
    font-size: 2.5vmin;
    font-family: Urbanist;
    color: #2b2119;
    font-weight: 400;
    line-height: 1.75;
    text-align: center;
  `,

  PreviewAdd: `
    width: 90%;
    aspect-ratio: 5;
    background-color: #dae3bb;
    border-radius: calc(5vmin * 6 * 0.05);
    font-size: calc((52.5vmin - (52.5vmin / 1.75 / 1.1)) * 0.9 / 10);
    box-sizing: border-box;
    font-family: Urbanist;
    color: white;
    font-weight: 600;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  `,
};

var landscapeMedium = {
  PreviewBox: `
      border: 0.4vmin solid #aebe89;
      width: 60vmin;
      aspect-ratio: 1.75;
      border-radius: calc(60vmin / 1.75 * 0.05);
      display: flex;
      flex-direction: row;
      align-items: center;
      overflow: hidden;
    `,

  PreviewImage: `
      height: 100%;
      aspect-ratio: calc(1 / 1.1);
      z-index: 0;
      background-size: cover;
      cursor: pointer;
    `,

  PreviewInfo: `
      position: relative;
      margin-left: auto;
      margin-right: 0;
      height: 100%;
      width: calc(60vmin - (60vmin / 1.75 / 1.1));
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      padding-top: 0.75vh;
      padding-bottom: 0.75vh;
      border-left: 0.4vmin solid #dae3bb;
      box-sizing: border-box;
      z-index: 5;
    `,

  PreviewName: `
      width: 90%;
      font-size: 3.5vmin;
      font-family: Urbanist;
      color: #aebe89;
      font-weight: 500;
      line-height: 1.75;
      text-align: center;
      cursor: pointer;
    `,

  PreviewSub: `
      width: 90%;
      font-size: 3vmin;
      font-family: Urbanist;
      color: #2b2119;
      font-weight: 400;
      line-height: 1.75;
      text-align: center;
    `,

  PreviewAdd: `
      width: 90%;
      aspect-ratio: 5;
      background-color: #dae3bb;
      border-radius: calc((60vmin - (60vmin / 1.75 / 1.1)) * 0.9 * 0.05);
      font-size: calc((60vmin - (60vmin / 1.75 / 1.1)) * 0.9 / 10);
      box-sizing: border-box;
      font-family: Urbanist;
      color: white;
      font-weight: 600;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    `,
};

var landscapeLarge = {
  PreviewBox: `
      border: 0.5vmin solid #aebe89;
      width: 67.5vmin;
      aspect-ratio: 1.75;
      border-radius: calc(67.5vmin / 1.75 * 0.05);
      display: flex;
      flex-direction: row;
      align-items: center;
      overflow: hidden;
    `,

  PreviewImage: `
      height: 100%;
      aspect-ratio: calc(1 / 1.1);
      z-index: 0;
      background-size: cover;
      cursor: pointer;
    `,

  PreviewInfo: `
      position: relative;
      margin-left: auto;
      margin-right: 0;
      height: 100%;
      width: calc(67.5vmin - (67.5vmin / 1.75 / 1.1));
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      padding-top: 0.75vh;
      padding-bottom: 0.75vh;
      border-left: 0.5vmin solid #dae3bb;
      box-sizing: border-box;
      z-index: 5;
    `,

  PreviewName: `
      width: 90%;
      font-size: 4vmin;
      font-family: Urbanist;
      color: #aebe89;
      font-weight: 500;
      line-height: 1.75;
      text-align: center;
      cursor: pointer;
    `,

  PreviewSub: `
      width: 90%;
      font-size: 3.5vmin;
      font-family: Urbanist;
      color: #2b2119;
      font-weight: 400;
      line-height: 1.75;
      text-align: center;
    `,

  PreviewAdd: `
      width: 90%;
      aspect-ratio: 5;
      background-color: #dae3bb;
      border-radius: calc((67.5vmin - (67.5vmin / 1.75 / 1.1)) * 0.9 * 0.05);
      font-size: calc((67.5vmin - (67.5vmin / 1.75 / 1.1)) * 0.9 / 10);
      box-sizing: border-box;
      font-family: Urbanist;
      color: white;
      font-weight: 600;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    `,
};

var landscapeXLarge = {
  PreviewBox: `
      border: 0.575vmin solid #aebe89;
      width: 75vmin;
      aspect-ratio: 1.75;
      border-radius: calc(75vmin / 1.75 * 0.05);
      display: flex;
      flex-direction: row;
      align-items: center;
      overflow: hidden;
    `,

  PreviewImage: `
      height: 100%;
      aspect-ratio: calc(1 / 1.1);
      z-index: 0;
      background-size: cover;
      cursor: pointer;
    `,

  PreviewInfo: `
      position: relative;
      margin-left: auto;
      margin-right: 0;
      height: 100%;
      width: calc(75vmin - (75vmin / 1.75 / 1.1));
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      padding-top: 0.75vh;
      padding-bottom: 0.75vh;
      border-left: 0.575vmin solid #dae3bb;
      box-sizing: border-box;
      z-index: 5;
    `,

  PreviewName: `
      width: 90%;
      font-size: 4.5vmin;
      font-family: Urbanist;
      color: #aebe89;
      font-weight: 500;
      line-height: 1.75;
      text-align: center;
      cursor: pointer;
    `,

  PreviewSub: `
      width: 90%;
      font-size: 4vmin;
      font-family: Urbanist;
      color: #2b2119;
      font-weight: 400;
      line-height: 1.75;
      text-align: center;
    `,

  PreviewAdd: `
      width: 90%;
      aspect-ratio: 5;
      background-color: #dae3bb;
      border-radius: calc((75vmin - (75vmin / 1.75 / 1.1)) * 0.9 * 0.05);
      font-size: calc((75vmin - (75vmin / 1.75 / 1.1)) * 0.9 / 10);
      box-sizing: border-box;
      font-family: Urbanist;
      color: white;
      font-weight: 600;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    `,
};
