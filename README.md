## Use
```js
const c = require("c-anvas");
const fs = require('fs');

var image = await new c.Banned()
    .setNumero("+62 831-3325-5651")
    .Create();
    
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/tmp/banned.png', data)
```
### result
![`Img`](https://rawcdn.githack.com/Lingz-ui/data-myBot/58d6aae7c57c5515603b94aae6fc872723e76115/IMG_20221127_093153.JPG)
<p align="center">
    <h5 >Made with 💕 </h5><h6>© 2022 • Lingz</h6>
    
</p>


