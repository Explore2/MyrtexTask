﻿DELETE FROM dbo.Employees
WHERE DATEDIFF(YEAR, DateOfBirth, CAST( GETDATE() AS Date )) > 70