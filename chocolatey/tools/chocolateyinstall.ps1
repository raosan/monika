$ErrorActionPreference = 'Stop';
$toolsDir   = "$(Split-Path -parent $MyInvocation.MyCommand.Definition)"
$url64      = 'https://github.com/hyperjumptech/monika/releases/download/v1.6.11/monika-v1.6.11-win-x64.zip' # 64bit URL here (HTTPS preferred) or remove - if installer contains both (very rare), use $url

$packageArgs = @{
  packageName   = 'monika'
  unzipLocation = $toolsDir
  url64bit      = $url64
}

Install-ChocolateyZipPackage @packageArgs