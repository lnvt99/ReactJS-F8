# useState: trạng thái của dữ liệu
1. When
    - Khi muốn dữ liệu thay đổi thì giao diện tự động cập nhật (render lại theo dữ liệu)..

2. How
```
import { useState } from 'react'

function Component() {
    const [state, setState] = useState(initState)
}
```

# Note
- Component được render sau khi `setState`
- Initial state chỉ dùng cho lần đầu
- Set state với callback?
- Initial state với callback?
- Set state là thay thế state bằng giá trị mới