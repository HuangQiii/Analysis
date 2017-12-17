# Analysis
洞察模块中转

### 需要修改的地方
node_module->native-echarts->src->Echarst->index.js

`source={require('./tpl.html')}`

改为

`source={{ uri: 'file:///sdcard/Android/data/com.digitalplatform/files/analysis/tpl.html' }}`
