[# markdown](https://www.markdownguide.org/basic-syntax/)

I. Cấu trúc dự án, bao gồm:
---------------------------

1. build: Chứa các file sau khi chạy lệnh "npm run build" or "yarn build" để phục vụ cho việc deploy lên Production server

2. config: Chứa các thông số cấu hình của dự án như API_URL, PORT, ... 

    > (Lưu ý: không lưu các thông tin bảo mật như: PASSWORD, SECRET_KEY, ...)

3. mock: Chứa mock-up data chủ yếu là các file *.json, phục vụ cho việc giả lập dữ liệu, trong quá trình chờ phía Back-end cung cấp API

4. store: Chứa file cấu hính liên qua đến Redux Store, Middlewares (redux-thunk, redux-saga, redux-persist, redux-log, ...)

5. src: 
    - apis: Chứa các file gọi api 

    - common: Chứa các thông tin dùng chung cho toàn bộ dự án

      1. actions: Chứa các redux action dùng chung như USER_PROFILE, AUTH_TOKEN, LOGGED_IN_STATUS, ...
      2. assets: Chứa global CSS (SCSS, SASS, Less, ...)
      3. components:
          + controls: Chứa các custom components liên quan đến tương tác với Form như Input, Button, Select, Textarea,...
          + layout: Chứa các custom components liên quan đến layout như Navbar, Sidebar, Top Menu, Header, Footer, ...
          + others: Chứa các custom components khác như Card, Label, Alert, Avatar, Dialog,....
      4. reducers: Chứa các redux reducer (global state) dùng chung.

    - modules: Chưa các chức năng chính. Vd: Có các chức năng Auth, Home, About, Contat, Product,..
        Trong mỗi module cũng sẽ bao gồm các thư mục: actions, reducers queries-fn, assets, components & pages. Vd module "Auth":

        1. Auth:
            - actions: Chứa các actions dùng cho Redux
            - assets: Chứa các file tài nguyên chủ yếu là CSS (SASS files)
            - components: Chứa các custom components dùng trong module
                + Login Form 
                + Register Form 
                + ...
            - pages : Chứa các page(s) liên quan đến module
                + Login page 
                + Register page 
                + ... 
            - reducers: Chứa các reducers dùng cho Redux
            - queries-fn: Chứa các query functions dùng cho react-query.
        2. Home
        3. ...

    - routes: Chức các file liên quan tới định nghĩa route (React-router-dom), custom routes (Private route, Lock route)

    - utils: Chứa các file tiện ích
----
II.  Quy tắc đặt tên file: 
---------------------------
1. src 
    - component 
        - global => ```C{component_name}.js``` => Tên file bắt đầu với tiền tố "C" (Common). VD: CNavbar.js
        - local => ```M{component_name}.js``` => Tên file bắt đầu với tiền tố "M" (Module). VD: MHeader.js
    - redux 
        - global
            - action => ```{action_name}.action.js```. VD: auth.action.js, profile.action.js
            - reducer => ```{reducer_name}.reducer.js```. VD: auth.reducer.js, profile.reducer.js
                => Các reducers sẽ được combine trong file index.js
        - local 
            - action => ```{module_name}.{ten_action}.action.js```. VD: auth.login.action.js
            - reducer => ```{module_name}.reducer.js```. VD: login.reducer.js, register.reducer.js
                => Các reducers sẽ được combine trong file index.js
    - react-query 
        - global
            - func => ```{api_name}.fn.js```
        - local
            - func => ```{action_name}.fn.js```
----
III.  Các framework liên quan: 

- Sử dụng "Ant Design" Framework
- CSS sử dụng "sass"
- Bundler sử dụng "webpack"
- Sử dùng các thư viện caching + quản lý state, bao gồm: redux (redux-persist, redux-thunk) + react-query
- Call API sử dụng "axios"
- Navigate to pages sử dụng "react-router-dom"

Lưu ý: Khi phát sinh các thư viện liên quan đến dự án cần bàn với team thống nhất trước khi sử dụng