/*
    I didnt understand how to delete using exists in sqlLite 
    I do now becuase of https://www.techonthenet.com/sqlite/delete.php  !!!
*/
delete
from orders
where exists 
  (select *
          FROM customers
          where customers.id = orders.customerId 
            and customers.balance < 0);
