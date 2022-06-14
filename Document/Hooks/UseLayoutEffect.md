# useEffect
- Cập nhật lại state
- Cập nhật DOM (mutated)
- Render lại UI
- Gọi cleanup nếu deps thay đổi
- Gọi useEffect callback

# useLayoutEffect
- Cập nhật lại state
- Cập nhật DOM (mutated)
- Gọi cleanup nếu deps thay đổi (sync)
- Gọi useLayoutEffect callback (sync)
- Render lại UI