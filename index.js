/*
    Scripts
        each script is considered its own mini program
        ES modules probably fall into this as well
        External scripts are considered JSONP
        Scripts can go in <head> or <body> tags
        Loading scripts later allows html to load first
            defer="defer", lets page load first before loading script
                <script src="www.url" defer="defer"></script>
            async="async", lets script load asynchronously and not interfere with page
                <script src="www.url" async="async"></script>
        Examples:
            <script>code<script/>
            <script src="www.completeurl.com"></script>
            <script src="/filepath/file"></script>
*/
