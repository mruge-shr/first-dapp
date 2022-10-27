FROM node

RUN apt-get update ; apt-get install -y --no-install-recommends \
    git \
    curl \
    ssh \
    sudo 

ARG USERNAME=node

RUN echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

USER $USERNAME
WORKDIR /workspace
CMD bash    