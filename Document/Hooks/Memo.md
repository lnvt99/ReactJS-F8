# Memo
- memo() -> Higher Order Component
- Nhận component và check các props trong component đó
            sau mỗi lần render có bị thay đổi hay không
- useCallback(): next lesson
- React.memo được gọi là Higher order component (HOC). Dùng để ghi nhớ các props của một component, quyết định xem có render lại component đó hay không để tối ưu về hiệu năng.
- Ngắn gọn React.memo dùng để xử lý component tránh re-render trong tình huống không cần thiết.

React thường sử dụng 3 phần: Hook, HOC, Render props