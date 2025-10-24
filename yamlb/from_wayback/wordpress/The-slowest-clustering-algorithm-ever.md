---
title: The slowest clustering algorithm ever
---

|*Date*| 2009-03-04|

Clustering as “Merge growing bubbles”

<div class="video-container">
  <iframe src="https://www.dailymotion.com/embed/video/k2HPRBYDhNIPfHYnna" frameborder="0" allowfullscreen width="800" height="450"></iframe>
</div>

Matlab code (requires `mpgwrite`)

```matlab
function bubble_clustering_example()
% Pierre Dangauthier
% 2 decembre 2008
%
% Bubble clustering is a naive O(n^2) algorithm for clustering, based on
% euclidian distances.
%
% Idea :  “Grow and merge bubbles”
% Start with a cluster per point. Each cluster = a bubble of radius 0
% centered on each point. Then increase all bubble sizes until 2 bubbles
% get in contact. This defines a merge from 2 clusters to one cluster.
% Terminate when all points are in the same bubble.
%
% This matlab file
% 1 – generates a random 2D dataset
% 2 – percomputed all pairwise distances
% 3 – grow and merge the bubbles
% 4 – display this evolution and record a movie
%%%%%%%%%%%%%%%%%%%%%%
%% Generate a data set (mixture of 12 gaussians)
%%%%%%%%%%%%%%%%%%%%%%
nn = 30;
x = [ -1 + 0.5*randn( nn, 2); 1 + 0.3*randn( 2*nn, 2) ];
n = size(x,1);
%%%%%%%%%%%%%%%%%%%%%%
%% Pre compute pairwise distance
%%%%%%%%%%%%%%%%%%%%%%
mywaitbar = waitbar(0,"Computing pairwise distances");
d = NaN(n*(n-1)/2,3); % parwise distance in a column. d(i,1) = DIST( x_d(i,2), x_d(i,3) )
k = 0;
for i =1:n
    for j = (i+1):n
        waitbar(k/(n*(n-1)/2)); % waitbar
        k = k+1;
        d(k,1) = sqrt(sum(( x(i,:)-x(j,:)).^2));
        d(k,2) = i;
        d(k,3) = j;
    end
end
close(mywaitbar);% waitbar
% Sort distances
[XX sortIdx] = sort(d(:,1),1);
d(:,1) = d(sortIdx,1);
d(:,2) = d(sortIdx,2);
d(:,3) = d(sortIdx,3);
cluster = NaN(1,n); % cluster label for each point
mapcolor = rand(n,3); % map of rgb random colors for the bubbles
% Prepare figure
fig=figure(1);
dx = max(x(:,1)) - min(x(:,1));
dy = max(x(:,2)) - min(x(:,2));
wSF = 0.2; % extending window factor
axis([min(x(:,1)-wSF*dx) max(x(:,1)+wSF*dx)...
    min(x(:,2)-wSF*dy) max(x(:,2)+wSF*dy)  ]);
currDidx = 1;
currclust = 0;
frameIdx = 0; % for movie generation
%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%% Grow and merge bubbles
%%%%%%%%%%%%%%%%%%%%%%
maxradius = (0.5 * max(d(:,1)) ) / sqrt(size(x,1)/4); % no need to have bigger bubbles
stop = false; % to manage termination criteria
for s = 0:0.001:maxradius % radius of bubble define the nb of frames
    frameIdx = frameIdx +1 ;
    disp("");
    disp(['*************** NEW size = ' num2str(s)]);
    while 2*s > d(currDidx, 1) % for all new bubble shock
        i = d(currDidx, 2);
        j = d(currDidx, 3);
        disp(['joined ' num2str(i) ' and ' num2str(j)]);
        if isnan(cluster(i)) && isnan(cluster(j)) % both singles pts
            currclust = currclust + 1;
            cluster(i) = currclust;
            cluster(j) = currclust;
            disp([' -> creating new cluster ID=' num2str(currclust) ' and assign it to those 2 points']);
        else
            % one of the 2 pts already a cluster (or both)
            if ~isnan(cluster(i)) && ~isnan(cluster(j))  % both had a family
                if cluster(i) == cluster(j)
                    % do nothing disp(‘ERROR NOT POSSIBLE’);
                else
                    disp([' -> merging the 2 clusters ' num2str(cluster(i)) ' and ' num2str(cluster(j)) ' to be cluster ' num2str(cluster(i))]);
                    cluster( cluster == cluster(j)) = cluster(i);
                end
            else % only one has a family
                if isnan(cluster(i)) % i is single
                    disp([' -> ' num2str(i) ' is single, assign him the clusterID of ' num2str(j) ' which is ID=' num2str( cluster(j))]);
                    cluster(i) = cluster(j);
                else % j is single
                    disp([' -> ' num2str(j) ' is single, assign him the clusterID of ' num2str(i) ' which is ID=' num2str(cluster(i))]);
                    cluster(j) = cluster(i);
                end
            end
        end
        currDidx = currDidx +1;
        if currDidx > n*(n-1)/2
            disp("END OF ALGO, you should have only one cluster");
            stop = true; % hack to break the ‘for s’ loop
            break
        end
    end
    % plot the circles (bubbles) and data points
    clf
    refresh
    hold on
    colors = cluster;
    colors(isnan(colors)) = 0;
    colors = colors +1;
    for k = 1:size(x,1)
        circle(x(k,:), s, 100, '-', mapcolor(colors(k),:) );
    end
    axis([min(x(:,1)-wSF*dx) max(x(:,1)+wSF*dx)...
        min(x(:,2)-wSF*dy) max(x(:,2)+wSF*dy)  ]);
    mappedColors = mapcolor(colors,:);
    scatter(x(:,1),x(:,2), 100, mappedColors, 'x');
    hold off
    F(frameIdx) = getframe(fig); % store frame for movie
    if stop
        break
    end
end


%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%% save MOVIE require  mpgwrite.dll (present in file exchange)
mpgwrite(F,jet,'clustering_movie.mpg', [1, 0, 1, 0, 10, 1, 1, 1]);
mpgwrite(F,jet,'clustering_movie_default.mpg');
close all
return
function H=circle(center,radius,NOP,style, col)
%———————————————————————————————
% H=CIRCLE(CENTER,RADIUS,NOP,STYLE)
% This routine draws a circle with center defined as
% a vector CENTER, radius as a scaler RADIS. NOP is
% the number of points on the circle. As to STYLE,
% use it the same way as you use the rountine PLOT.
% Since the handle of the object is returned, you
% use routine SET to get the best result.
%
%  the last atrgumen , col, is added by pierre dangauthier col = [0.5 0.5 0.2]
%
%   Usage Examples,
%
%   circle([1,3],3,1000,’:');
%   circle([2,4],2,1000,’–’);
%
%   Zhenhai Wang <zhenhai@ieee.org>
%   Version 1.00
%   December, 2002
%———————————————————————————————
if (nargin <3)
    error("Please see help for INPUT DATA.");
elseif (nargin==3)
    style="b-";
end
THETA=linspace(0,2*pi,NOP);
RHO=ones(1,NOP)*radius;
[X,Y] = pol2cart(THETA,RHO);
X=X+center(1);
Y=Y+center(2);
H=plot(X,Y,style,"Color",col,"LineWidth",4);
axis square;

```


# Comments

> This looks like a nice visualization of the classical [single linkage clustering](https://en.wikipedia.org/wiki/Single-linkage_clustering).
Comment by KT — March 25, 2009
