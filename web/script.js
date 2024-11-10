$(function() {
    const video = $('#video').get(0);   // 獲取第一部影片
    const video2 = $('#video2').get(0);  // 獲取第二部影片

    // 檢查影片元素是否存在
    if (!video || !video2) {
        console.error("Video element not found");
        return;
    }
    const video2StartScroll = 500; // 设置 video2 开始播放的滚动起点
    const maxScroll = $(document).height() - $(window).height();  // 最大滾動距離

    $(window).scroll(function() {
        const currentScrollPosition = $(document).scrollTop();  // 當前滾動位置

        // 確保影片的 duration 可用，並根據滾動進度更新影片播放進度
        if (video.duration && video2.duration) {
            video.currentTime = video.duration * (currentScrollPosition / maxScroll);   // 控制第一部影片播放進度
            video2.currentTime = video2.duration * ((currentScrollPosition-1000) / maxScroll);  // 控制第二部影片播放進度
        } else {
            console.warn("Video duration is not available");
        }
    });
});

