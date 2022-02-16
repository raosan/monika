$ErrorActionPreference = 'Stop';
$toolsDir   = "$(Split-Path -parent $MyInvocation.MyCommand.Definition)"
$url64      = 'https://github.com/hyperjumptech/monika/releases/download/v1.6.12/monika-v1.6.12-win-x64.zip'

$packageArgs = @{
  packageName   = 'monika'
  unzipLocation = $toolsDir
  url64bit      = $url64
  checksum64    = 'https://github.com/hyperjumptech/monika/releases/download/v1.6.12/monika-v1.6.12-win-x64-CHECKSUM.txt'
  checksumType64= 'sha256'
}

Install-ChocolateyZipPackage @packageArgs