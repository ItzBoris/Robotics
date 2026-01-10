
$events = @(
    @{ Title="Chakravyuh"; Url="https://cdn.sanity.io/images/58siqeyu/production/18c3b776e6a129f39a8a5f77e1f8df52c46deb8b-3505x4879.png" },
    @{ Title="Codejuring"; Url="https://cdn.sanity.io/images/58siqeyu/production/9dc0c62cd4a355bb3220b845973798d1275ff229-1200x650.jpg" },
    @{ Title="Freshers_Orientation"; Url="https://cdn.sanity.io/images/58siqeyu/production/1c73972370e08724bbb7e15d22f7a1ca31e1ef2b-640x640.jpg" },
    @{ Title="Arduino_Jam"; Url="https://cdn.sanity.io/images/58siqeyu/production/d561344cbd237de3a9e9afbd8039bc030ce65250-820x410.webp" },
    @{ Title="Hack_O_Heist"; Url="https://cdn.sanity.io/images/58siqeyu/production/3b5b8da0c7e5c9fe30929874bf5e53053194daa1-700x400.png" },
    @{ Title="RoboWar"; Url="https://cdn.sanity.io/images/58siqeyu/production/058d097dc0c333b8206081438506c14a048bdceb-1131x1600.jpg" },
    @{ Title="Digital_Detective"; Url="https://cdn.sanity.io/images/58siqeyu/production/efe6990b4c88c79cb7057c51983bef537fa11377-700x400.jpg" },
    @{ Title="The_Next_Hokage"; Url="https://cdn.sanity.io/images/58siqeyu/production/91567035b961c3978ef4bbc4dec4516c5bee505f-919x1280.jpg" },
    @{ Title="Abhiyutthan"; Url="https://cdn.sanity.io/images/58siqeyu/production/4d7ed05fd5259047f072b848af350fee3b17826e-640x791.jpg" },
    @{ Title="Machine_Mayhem"; Url="https://cdn.sanity.io/images/58siqeyu/production/15bacef4098afd27ebf1717f558f84878eee8bbf-1280x768.jpg" },
    @{ Title="Soccer_Bot_Challenge"; Url="https://cdn.sanity.io/images/58siqeyu/production/787b4ffff5a3248714bebc04ed9133151bc3d7b9-905x1280.jpg" },
    @{ Title="Laser_Bot_Race"; Url="https://cdn.sanity.io/images/58siqeyu/production/cf98efd3d777ee8b31fc6845c12ddd35ac4ab1e9-724x1024.jpg" }
)

foreach ($event in $events) {
    $extension = [System.IO.Path]::GetExtension($event.Url)
    if (-not $extension) { $extension = ".jpg" }
    $filename = $event.Title + $extension
    $path = Join-Path "c:\Robotics\Frontend\images\events" $filename
    Write-Host "Downloading $($event.Title) to $path..."
    try {
        Invoke-WebRequest -Uri $event.Url -OutFile $path
    } catch {
        Write-Error "Failed to download $($event.Title): $_"
    }
}
