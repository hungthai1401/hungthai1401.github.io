# Mission: Domain-Driven Design cho dự án Laravel đặt lịch (booking)

## Why
Tôi sắp bắt đầu một dự án Laravel mới (ứng dụng đặt lịch/booking) và muốn thiết kế nó theo DDD ngay từ đầu, thay vì viết theo kiểu "fat controller / fat model" rồi phải refactor sau. Tôi đã vững OOP nhưng chưa từng áp dụng DDD trong thực tế.

## Success looks like
- Xác định được các Bounded Context của hệ thống booking. Đề xuất hiện tại (xem `lessons/0005-recommended-bounded-contexts.html`): **Scheduling** (Core Domain - đầu tư DDD tactical đầy đủ), **Payment** (Supporting - dùng SDK cổng thanh toán, model mỏng), **Notification** (Generic - dùng Laravel Notification có sẵn). "Availability" chưa tách riêng - chỉ là query đọc từ Scheduling, sẽ tách khi thực sự cần.
- Mô hình hóa được ít nhất một Aggregate thực tế (ví dụ: `Booking`) với Entity, Value Object, và invariant rõ ràng
- Viết được domain logic (business rules) tách khỏi Eloquent Model/Controller, có thể test độc lập không cần DB/framework
- Tổ chức được cấu trúc thư mục Laravel theo hướng DDD (Domain / Application / Infrastructure layers) cho ít nhất một module
- Biết khi nào DDD là "quá tay" (over-engineering) cho một phần đơn giản của hệ thống

## Constraints
- Chưa có dòng code nào của dự án - học và áp dụng song song từ đầu
- Mục tiêu bắt đầu code theo hướng DDD trong 2-4 tuần tới
- Học theo nhịp: mỗi buổi một bài ngắn, đều đặn (tránh dồn nhiều bài một lúc)
- Nền tảng: đã biết OOP tốt (PHP), có kinh nghiệm Laravel, nhưng DDD là hoàn toàn mới (chưa biết Entity, Aggregate, Value Object, Bounded Context...)

## Out of scope
- Event Sourcing / CQRS chuyên sâu (có thể quay lại sau khi vững DDD cơ bản)
- Microservices / tách hệ thống thành nhiều service riêng
- Các pattern DDD nâng cao hiếm dùng (Specification pattern phức tạp, Domain Events phân tán qua message broker) trước khi nắm chắc nền tảng
