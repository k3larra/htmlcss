SETX HOMEDRIVE %SYSTEMDRIVE% -m
SETX HOMEPATH \Users\%username% -m
SET HOME=%SYSTEMDRIVE%\Users\%USERNAME%
SETX HOME "%HOME%"
SET TEMP=%HOME%\Local Settings\Temp
SETX TEMP "%TEMP%"
SETX TMP "%TEMP%"