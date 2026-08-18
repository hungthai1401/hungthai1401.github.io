# Mission: ProxySQL for a mission-critical production stack

## Why
Bạn đang thiết kế một kiến trúc database mới từ đầu, cho một hệ thống mission-critical, gồm **cả MySQL/MariaDB và PostgreSQL**, và cần ProxySQL làm lớp proxy giữa application và database cho cả hai. Kết quả cụ thể: đứng vững được một stack database + proxy production-grade, không có single point of failure ở bất kỳ tầng nào (database layer và ProxySQL layer), và route được read/write traffic đúng cách khi failover xảy ra — cho cả 2 engine.

## Success looks like
- Chọn và giải thích được lý do chọn một topology MySQL cụ thể (Async Replication / Group Replication / Galera-PXC) cho hệ thống mission-critical
- Cài đặt và cấu hình được ProxySQL: hostgroups, query rules, users, monitor module, để route read/write đúng theo topology đã chọn
- Thiết kế được ProxySQL tự nó có HA (ProxySQL Cluster + VIP/Keepalived hoặc tương đương), không phải điểm chết duy nhất
- Suy luận được hành vi failover end-to-end: điều gì xảy ra ở MySQL layer, điều gì ProxySQL phát hiện được, và độ trễ/downtime thực tế
- Biết cách monitor, sizing, và thay đổi config ProxySQL an toàn trên production (không cần restart, không gây downtime)
- Hiểu được ProxySQL hỗ trợ PostgreSQL khác gì so với MySQL (giới hạn, cấu hình, mức độ trưởng thành của feature), và cấu hình được routing cơ bản cho PostgreSQL backend

## Constraints
- Đã quản trị MySQL replication/cluster, nhưng chưa từng dùng proxy layer — không cần dạy lại replication cơ bản, tập trung vào phần mới: proxy layer
- Hệ thống thật có cả MySQL/MariaDB và PostgreSQL — ProxySQL cho PostgreSQL là một module riêng, khác với module MySQL đã học ở Lesson 1-9; không giả định mọi kiến thức MySQL đều áp dụng thẳng sang PostgreSQL
- Hạ tầng triển khai (bare-metal/VM, Docker, K8s) chưa quyết định — cần được tư vấn, có thể ảnh hưởng tới lựa chọn proxy (xem Gaps trong RESOURCES.md)
- Muốn học lý thuyết trước (đọc reference), rồi thực hành; nhưng cũng ok học kiểu learning-by-doing khi cần
- Muốn có quiz sau mỗi lesson để nhớ lâu, và cheat sheet tham khảo song song mỗi lesson

## Out of scope
- Query caching, query firewall, sharding nhiều cluster — chưa phải use case chính, chỉ nhắc tới khi liên quan
