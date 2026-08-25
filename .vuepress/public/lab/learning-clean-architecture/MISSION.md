# Mission: Clean Architecture (PHP / Laravel)

## Why
Người học đã có kinh nghiệm với layered/n-tier architecture trong PHP/Laravel và muốn xây dựng dự án mới đúng cách ngay từ đầu — tránh lặp lại sai lầm của codebase cũ mà khó maintain, khó test, business logic bị trộn lẫn với framework. Mục tiêu là hiểu và áp dụng được Clean Architecture để code linh hoạt, dễ test, và không sợ thay đổi framework hay database.

## Success looks like
- Giải thích được Dependency Rule và sự khác biệt cốt lõi giữa Clean Architecture và layered architecture truyền thống
- Phân tách được các layer: Entities, Use Cases, Interface Adapters, Frameworks & Drivers
- Thiết kế một Use Case (application service) trong Laravel mà không phụ thuộc trực tiếp vào Eloquent hay HTTP layer
- Viết được unit test cho business logic mà không cần database hay HTTP request
- Cấu trúc thư mục cho một dự án Laravel mới theo Clean Architecture
- Dùng được Value Objects để làm Entity chặt chẽ và biểu cảm hơn (mở rộng sau khi hoàn thành lộ trình nền tảng)

## Constraints
- Ngôn ngữ: PHP / Laravel
- Phong cách học: lý thuyết ngắn + code thực hành song song
- Người học đã nắm layered architecture, SOLID cơ bản

## Out of scope
- Microservices architecture (chưa cần ở giai đoạn này)
- CQRS / Event Sourcing phức tạp (sẽ xét sau khi nắm vững nền tảng)
- Domain-Driven Design đầy đủ (Bounded Context, Aggregate, Domain Event...) — chỉ Value Objects được đưa vào phạm vi vì phục vụ trực tiếp Entity đã học ở Bài 2
